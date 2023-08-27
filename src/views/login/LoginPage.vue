<script setup>
import { ref } from 'vue'
const loginWay = ref('phone')
const checked = ref(false)

const login = () => {
  console.log('登录')
}
</script>
<template>
  <div v-if="loginWay === 'email'" class="register">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="../../assets/smallIcon/youbodian4.png" />
      </div>
      <div class="title">
        <h3>邮箱密码登录</h3>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
          />
        </div>
        <div class="form-item">
          <input
            class="inp"
            maxlength="20"
            placeholder="请输入密码"
            type="password"
          />
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
  <div v-else-if="loginWay === 'password'" class="register">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="../../assets/smallIcon/youbodian4.png" />
      </div>
      <div class="title">
        <h3>帐号密码登录</h3>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
          />
        </div>
        <div class="form-item">
          <input
            class="inp"
            maxlength="20"
            placeholder="请输入密码"
            type="password"
          />
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
  <div v-else-if="loginWay === 'phone'" class="login">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="../../assets/smallIcon/youbodian4.png" />
      </div>
      <div class="title">
        <h3>手机验证码登录</h3>
        <p>未注册手机登录时会自动创建新账号</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
          />
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" />
          <button>获取验证码</button>
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
        @click="loginWay = 'wechat'"
        class="loginIcon"
        src="../../assets/smallIcon/wechatLogin.png"
        alt="微信登录"
    /></span>
    <span
      ><img
        @click="loginWay = 'password'"
        class="loginIcon"
        src="../../assets/smallIcon/passwordLogin.png"
        alt="密码登录"
    /></span>
    <span
      ><img
        @click="loginWay = 'email'"
        class="loginIcon"
        src="../../assets/smallIcon/emailLogin.png"
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
    padding-bottom: 50px;
  }
  .title {
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
    padding-top: 33px;
    .form-item {
      border-radius: 5px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      background-color: #fff;
      .inp {
        display: block;
        border: none;
        outline: none;
        height: 32px;
        font-size: 14px;
        flex: 1;
        color: #999999;
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
  padding-top: 87px;
  display: flex;
  align-items: center;
}

.line {
  width: 100px;
  height: 1px;
  background-color: #dadada;
  margin: 0 10px;
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
}
</style>
