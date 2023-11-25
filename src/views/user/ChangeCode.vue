<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'
import { ref } from 'vue'
import { resetUserPasswordService } from '@/api/user'
import { showFailToast, showSuccessToast } from 'vant'
const oldPassword = ref('')
const newPassword = ref('')

const access_token = localStorage.getItem('access_token')
// const refresh_token = localStorage.getItem('refresh_token')
const token_type = localStorage.getItem('token_type')
// 调用getUserInfoService并携带自定义请求头
const headers = ref({
  Authorization: `${token_type} ${access_token}`
})

const resetPassword = async () => {
  try {
    const response = await resetUserPasswordService(
      oldPassword.value,
      newPassword.value,
      headers.value.Authorization
    )
    // 在这里处理响应数据，可以根据需要进行操作
    const data = response.data
    console.log(data)
    showSuccessToast('更新密码成功')
  } catch (error) {
    // 处理错误
    console.log(error.response.data.msg)
    if (
      error.response.data.msg === 'The password must have at least 8 characters'
    ) {
      showFailToast('密码至少要八位数')
      return
    }
    console.error('更改密码失败：', error)
  }
  router.go(-1)
}
</script>

<template>
  <van-nav-bar left-arrow @click-left="router.go(-1)" title="重置密码" />

  <div class="CCContainer">
    <div class="form">
      <div class="form-item">
        <input
          class="inp"
          maxlength="11"
          placeholder="请输入旧的登录密码"
          type="password"
          v-model="oldPassword"
        />
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
    <BtnGreen message="确认重置" class="btn" @click="resetPassword"></BtnGreen>
  </div>
</template>

<style scoped>
.CCContainer {
  background-color: rgb(248, 248, 248);
  p {
    line-height: 40px;
    font-size: 14px;
    color: #b8b8b8;
  }
}

.form {
  width: 100%;
  border-radius: 5px;
  .form-item {
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 0;
    padding-left: 10px;
  }
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
