<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import BtnGreen from '@/components/BtnGreen.vue'
import {
  getCaptchaService,
  userLoginService,
  userSendVerityCodeService
} from '@/api/user'
import { useAuthStore } from '@/stores/user'

const loginWay = ref('code')
const checked = ref(false)

const login = async () => {
  try {
    // console.log(codeLoginDest.value)
    // console.log(smsCode.value)
    // console.log('====')
    const response = await userLoginService(
      codeLoginDest.value,
      smsCode.value,
      password.value
    )
    const data = response.data
    const authStore = useAuthStore()
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('token_type', data.token_type)
    authStore.setTokens(data.access_token, data.refresh_token, data.token_type)
    console.log(authStore)
    await router.push('selectProfession')
  } catch (error) {
    // 处理错误
    console.error('登录失败：', error)
  }
}
let captchaValue = ref('')
let captchaId = ref('')
let captchaImage = ref('')

const getCaptcha = async () => {
  try {
    const response = await getCaptchaService()
    // 在这里处理响应数据，可以根据需要进行操作
    const data = response.data
    captchaId.value = data.captchaId
    captchaImage.value = data.captchaImage
    // 这里可以继续执行其他逻辑，使用响应的值
  } catch (error) {
    // 处理错误
    console.error('获取验证码失败：', error)
  }
}

let codeLoginDest = ref('')
let codeLoginCaptchaValue = ref('')
let dest = ref('')
let destType = ref('')
const getCode = async () => {
  try {
    console.log(codeLoginDest)
    console.log(codeLoginCaptchaValue)
    dest.value = codeLoginDest.value
    captchaValue.value = codeLoginCaptchaValue.value
    if (dest.value === null) {
      return '帐号为空'
    }
    if (dest.value.includes('@')) {
      destType.value = 'email'
    } else {
      destType.value = 'phone'
    }
    console.log(captchaId.value)
    console.log(captchaValue.value)
    console.log(dest.value)
    console.log(destType.value)
    const response = await userSendVerityCodeService(
      'Default',
      captchaId.value,
      captchaValue.value,
      dest.value,
      destType.value
    )
    // 在这里处理响应数据，可以根据需要进行操作
    const data = response.data
    // 这里可以继续执行其他逻辑，使用响应的值
    console.log(data)
  } catch (error) {
    // 处理错误
    console.error('获取验证码失败：', error)
  }
}

let smsCode = ref('')
let password = ref('')
let NotCodeDest = ref('')
const showPassword = ref(false)
getCaptcha()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <div v-if="loginWay === 'password'" class="register">
    <van-nav-bar left-arrow @click-left="router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="@/assets/smallIcon/youbodian4.png" />
      </div>
      <div class="title">
        <h3 class="h3NotCode">帐号密码登录</h3>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号或邮箱"
            type="text"
            v-model="NotCodeDest"
          />
        </div>
        <div class="form-item">
          <div class="password-input">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入密码"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
            />
          </div>
        </div>
        <div class="form-item">
          <div class="getCode">
            <input
              class="inp2"
              maxlength="10"
              placeholder="请输入验证码"
              v-model="captchaValue"
              type="text"
            />
            <img
              @click="getCaptcha"
              :src="'data:image/png;base64,' + captchaImage"
              style="height: 50px"
              alt="验证码"
            />
          </div>
        </div>
        <div class="forgetPassword" @click="router.push('resetPassword')">
          忘记密码
        </div>
      </div>

      <!--      <div class="login-btn">登录</div>-->
      <BtnGreen message="登录" @click="login"></BtnGreen>
      <div class="agreement">
        <van-checkbox @click="!checked" v-model="checked">
          <span class="custom-checkbox"></span>
          <span class="agreement-text">阅读并同意</span>
          <span class="agreement-link">《用户协议》</span>
          <span class="agreement-text">和</span>
          <span class="agreement-link">《隐私政策》</span>
        </van-checkbox>
      </div>
    </div>
  </div>

  <div v-else-if="loginWay === 'code'" class="login">
    <van-nav-bar left-arrow @click-left="router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="@/assets/smallIcon/youbodian4.png" />
      </div>
      <div class="title">
        <h3>手机/邮箱验证码登录</h3>
        <p>未注册登录时会自动创建新账号</p>
        <!--        <button @click="test">111</button>-->
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="20"
            placeholder="请输入手机号或邮箱"
            v-model="codeLoginDest"
            type="text"
          />
        </div>
        <div class="form-item">
          <div class="getCode">
            <input
              class="inp2"
              maxlength="10"
              placeholder="请输入验证码"
              v-model="codeLoginCaptchaValue"
              type="text"
            />
            <img
              @click="getCaptcha"
              :src="'data:image/png;base64,' + captchaImage"
              style="height: 50px"
              alt="验证码"
            />
          </div>
        </div>
        <div class="form-item">
          <input
            class="inp"
            v-model="smsCode"
            placeholder="请输入短信验证码"
            type="text"
          />
          <button @click="getCode">获取验证码</button>
        </div>
      </div>

      <BtnGreen message="登录" @click="login"></BtnGreen>
      <div class="agreement">
        <van-checkbox @click="!checked" v-model="checked">
          <span class="custom-checkbox"></span>
          <span class="agreement-text">阅读并同意</span>
          <span class="agreement-link">《用户协议》</span>
          <span class="agreement-text">和</span>
          <span class="agreement-link">《隐私政策》</span>
        </van-checkbox>
      </div>
    </div>
  </div>
  <div class="login-options">
    <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span class="login-text">其他登录方式</span>
    <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>
  <div class="LoginIconA">
    <span
      ><img
        @click="router.push('bindPhone')"
        class="loginIcon"
        src="@/assets/smallIcon/wechatLogin.png"
        alt="微信登录"
    /></span>
    <span
      ><img
        @click="loginWay = 'password'"
        class="loginIcon"
        src="@/assets/smallIcon/passwordLogin.png"
        alt="密码登录"
    /></span>
    <span
      ><img
        @click="loginWay = 'code'"
        class="loginIcon"
        src="@/assets/smallIcon/emailLogin.png"
        alt="邮箱登录"
    /></span>
  </div>
</template>

<style lang="less" scoped>
.container {
  background-color: rgb(248, 248, 248);
  padding: 0 14px 0 14px;
  .youbodianLogin {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .title {
    .h3NotCode {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }
  .form {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    .form-item {
      border-radius: 5px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      background-color: #fff;
      .getCode {
        display: flex;
        .inp2 {
          border: none;
          outline: none;
          height: 43px;
          font-size: 16px;
          width: 230px;
          flex: 1;
          color: #000;
          font-weight: 300;
          word-wrap: break-word;
          margin: 3px 3px 3px 10px;
        }
      }

      .inp {
        display: block;
        border: none;
        outline: none;
        height: 43px;
        font-size: 16px;
        width: 330px;
        flex: 1;
        color: #000;
        font-weight: 300;
        word-wrap: break-word;
        margin: 3px 3px 3px 10px;
      }
      img {
        width: 94px;
        height: 31px;
      }
      button {
        height: 31px;
        border: none;
        font-size: 13px;
        color: #11d075;
        background-color: transparent;
        padding-right: 9px;
      }
    }
    .forgetPassword {
      margin-left: 290px;
      color: #11d075;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
  }

  .agreement {
    margin-top: 10px;
    font-size: 14px;
    font-family: 'Source Han Sans CN', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    color: #666666;
  }

  .agreement-link {
    color: #21dc6b;
  }

  /* 如果需要设置文字居中，可以添加以下样式 */
  /*
  .agreement {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  */
}
.login-options {
  padding-top: 57px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
}

.line {
  width: 90px;
  height: 1px;
  background-color: #dadada;
  margin: 0 5px;
}

.login-text {
  font-size: 13px;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 400;
  width: 84px;
  color: #666666;
}
.LoginIconA {
  padding-top: 33px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  gap: 37px;
  padding-bottom: 70px;
}
</style>
