<script>
export default {
  name: 'loginForm'
}
</script>
<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="youbodianLogin">
        <img src="@/assets/smallIcon/youbodian4.png" />
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
      <btnGreen message="登录" @click="login"></btnGreen>
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
</template>

<style scoped></style>
