<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BtnGreen from '@/components/BtnGreen.vue'
const router = useRouter()
const active = ref(0)
</script>
<template>
  <van-nav-bar left-arrow @click-left="router.go(-1)" title="重置密码" />

  <div class="RPContainer">
    <van-tabs
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
            />
          </div>
          <div class="form-item">
            <input class="inp" placeholder="请输入验证码" type="text" />
            <div class="getCode">获取验证码</div>
          </div>
          <div class="form-item">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入新的登录密码"
              type="password"
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
            />
          </div>
          <div class="form-item">
            <input class="inp" placeholder="请输入验证码" type="text" />
            <div class="getCode">获取验证码</div>
          </div>
          <div class="form-item">
            <input
              class="inp"
              maxlength="20"
              placeholder="请输入新的登录密码"
              type="password"
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
  height: 130px;
  border-radius: 5px;
  padding-top: 43px;
  margin-bottom: 60px;
  .form-item {
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 0;
    img {
      width: 94px;
      height: 31px;
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
.inp {
  display: block;
  border: none;
  outline: none;
  height: 43px;
  font-size: 14px;
  flex: 1;
  color: #999999;
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
