<script>
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>
<template>
  <van-nav-bar left-arrow @click-left="$router.go(-1)" title="重置密码" />

  <div class="container">
    <van-tabs
      v-model:active="active"
      title-active-color="#11D075"
      color="#11D075"
      background="#fff"
    >
      <van-tab title="手机号码">
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
          <div class="form-item">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入密码"
              type="password"
            />
          </div>
        </div>
      </van-tab>
      <van-tab title="邮箱">
        <div class="form">
          <div class="form-item">
            <input
              class="inp"
              maxlength="11"
              placeholder="请输入邮箱"
              type="text"
            />
          </div>
          <div class="form-item">
            <input class="inp" placeholder="请输入邮箱验证码" type="text" />
            <button>获取验证码</button>
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
      </van-tab>
    </van-tabs>
    <!--      <div class="login-btn">登录</div>-->
    <btnGreen message="确认重置"></btnGreen>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(248, 248, 248);
  margin-top: 0;
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
    margin: 0;
    img {
      width: 94px;
      height: 31px;
    }
  }
}
button {
  height: 31px;
  border: none;
  font-size: 13px;
  color: #11d075;
  background-color: transparent;
  padding-right: 9px;
}
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
  padding: 3px 3px 3px 10px;
  margin: 0;
}
.van-tab__title {
  background-color: #ffa500; /* Set your desired color here */
}
</style>
