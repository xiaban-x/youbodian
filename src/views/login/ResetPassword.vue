<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BtnGreen from '@/components/BtnGreen.vue'
import { getCaptchaService, userSendVerityCodeService } from '@/api/user'
import { showToast } from 'vant'
const router = useRouter()
const active = ref(0)
let dest = ref('')
let code = ref('')
let newPassword = ref('')
const formClear = () => {
  dest.value = ''
  code.value = ''
  newPassword.value = ''
  getCaptcha()
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
const getCode = async () => {
  try {
    if (dest.value === null) {
      showToast('帐号为空')
      return '帐号为空'
    }
    const destType = ref('')
    if (dest.value.includes('@')) {
      destType.value = 'email'
    } else {
      destType.value = 'phone'
    }
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
getCaptcha()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar left-arrow @click-left="router.go(-1)" title="重置密码" />

  <div class="RPContainer">
    <van-tabs
      @click-tab="formClear"
      v-model:active="active"
      title-active-color="#11D075"
      color="#11D075"
      background="rgb(248,248,248)"
      shrink
      class="switchWay"
      line-width="70px"
    >
      <van-tab title="手机号码" class="wayChild">
        <div class="form">
          <div class="form-item">
            <input
              class="inp"
              maxlength="11"
              placeholder="请输入手机号码"
              type="text"
              v-model="dest"
            />
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
          <div class="form-item">
            <input
              class="inp"
              placeholder="请输入验证码"
              v-model="code"
              type="text"
            />
            <div class="sentCode">获取验证码</div>
          </div>
          <div class="form-item">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入新的登录密码"
              type="password"
              v-model="newPassword"
            />
          </div>
        </div>
      </van-tab>
      <van-tab title=" &nbsp; &nbsp; 邮箱 &nbsp;&nbsp;" class="wayChild">
        <div class="form">
          <div class="form-item">
            <input
              class="inp"
              maxlength="11"
              placeholder="请输入邮箱"
              type="text"
              v-model="dest"
            />
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
          <div class="form-item">
            <input
              class="inp"
              placeholder="请输入验证码"
              v-model="code"
              type="text"
            />
            <div class="sentCode">获取验证码</div>
          </div>
          <div class="form-item">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入新的登录密码"
              type="password"
              v-model="newPassword"
            />
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <!--      <div class="login-btn">登录</div>-->
    <BtnGreen message="确认重置" class="btn"></BtnGreen>
  </div>
</template>

<style scoped>
.RPContainer {
  background-color: rgb(248, 248, 248);
  margin-top: 24px;
  .switchWay {
    margin-left: 116px;
    .wayChild {
      margin-left: -102px;
      width: 347px;
    }
  }
  p {
    line-height: 40px;
    font-size: 14px;
    color: #b8b8b8;
  }
}

.form {
  width: 100%;
  border-radius: 5px;
  padding-top: 43px;
  margin-bottom: 60px;
  .form-item {
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 0;
    .getCode {
      display: flex;
      .inp2 {
        border: none;
        outline: none;
        height: 43px;
        font-size: 16px;
        width: 210px;
        flex: 1;
        color: #000;
        font-weight: 300;
        word-wrap: break-word;
        margin: 3px 3px 3px 10px;
      }
    }
  }
}
.sentCode {
  height: 31px;
  border: none;
  font-size: 13px;
  color: #11d075;
  background-color: transparent;
  padding-right: 9px;
  padding-top: 5px;
}
.inp {
  display: block;
  border: none;
  outline: none;
  height: 43px;
  font-size: 14px;
  flex: 1;
  font-weight: 300;
  word-wrap: break-word;
  padding: 3px 3px 3px 10px;
  margin: 0;
}
.btn {
  margin-left: 14px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  word-wrap: break-word;
}
</style>
