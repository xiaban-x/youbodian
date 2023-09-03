<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'
</script>
<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="router.go(-1)" />
    <div class="BPContainer">
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
          <div class="getCode">获取验证码</div>
        </div>
      </div>

      <BtnGreen
        message="下一步"
        @click="router.push('selectProfession')"
        class="btn"
      ></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.BPContainer {
  margin-left: 14px;
  .form {
    width: 347px;
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
.getCode {
  height: 31px;
  border: none;
  font-size: 13px;
  color: #11d075;
  background-color: transparent;
  padding-right: 9px;
  padding-top: 5px;
}
.btn {
  color: white;
  font-size: 18px;
  font-weight: 700;
  word-wrap: break-word;
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
