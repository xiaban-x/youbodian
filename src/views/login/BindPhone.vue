<script setup></script>
<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>绑定手机号码</h3>
        <p>未注册的用户通过验证后将自动注册</p>
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

      <btnGreen message="下一步" @click="login"></btnGreen>
    </div>
  </div>
</template>

<style scoped>
.container {
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
.title {
  margin-top: 30px;
}
h3 {
  color: #292929;
  font-size: 20px;
  font-weight: 500;
  word-wrap: break-word;
}

p {
  margin-top: 4px;
  line-height: 40px;
  font-size: 14px;
  color: #999999;
}
</style>
