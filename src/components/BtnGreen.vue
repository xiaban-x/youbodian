<script setup>
// import LoginPage from '@/views/login/LoginPage.vue'
//
// const login = () => {
//   console.log('登录事件')
// }
defineProps({
  message: String
})
</script>
<template>
  <button class="login-btn">{{ message }}</button>
  <!--  <LoginPage @login="login">{{ message }}</LoginPage>-->
</template>

<style scoped>
.login-btn {
  /*width: 100%;*/
  /*height: 42px;*/
  /*margin-top: 39px;*/
  /*//background: linear-gradient(90deg, #ecb53c, #ff9211);*/
  /*background: #11d075;*/
  /*color: #fff;*/
  /*border-radius: 39px;*/
  /*box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);*/
  /*letter-spacing: 2px;*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  width: 347px;
  height: 50px;
  background: #11d075;
  border-radius: 30px;
  border: 1px solid #0a904b; /* 添加边框并调整颜色 */
  backdrop-filter: blur(4px);
  color: #fff;
  margin-top: 28px;
}
</style>
