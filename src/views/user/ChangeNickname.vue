<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { updateUserInfoService } from '@/api/user'
import { ref } from 'vue'
const userStore = useUserStore()
const displayName = ref(userStore.displayName)
const access_token = localStorage.getItem('access_token')
// const refresh_token = localStorage.getItem('refresh_token')
const token_type = localStorage.getItem('token_type')
// 调用getUserInfoService并携带自定义请求头
const headers = ref({
  Authorization: `${token_type} ${access_token}` // 替换为你的自定义授权令牌
})
const changeName = async () => {
  try {
    console.log(displayName)
    console.log(userStore)
    const data = await updateUserInfoService(
      userStore.gender,
      displayName.value,
      userStore.avatar,
      userStore.location,
      userStore.email,
      userStore.phone,
      userStore.education,
      userStore.wechat,
      headers.value.Authorization
    )
    console.log(data)
  } catch (error) {
    // 处理错误
    console.error('修改名字失败：', error)
  }
  router.go(-1)
}
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <div class="CNNContainer">
    <Head>修改昵称</Head>
    <div class="changing-nickname">
      <input
        class="new-nickname"
        maxlength="11"
        placeholder="请输入你的名字"
        type="text"
        v-model="displayName"
      />
    </div>
    <div class="change-button">
      <BtnGreen message="确认修改" @click="changeName"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.CNNContainer {
  height: 650px;
  .changing-nickname {
    border-bottom: 1px #c7c7c7 solid;
  }
}
.changing-nickname .new-nickname {
  width: 375px;
  height: 42px;
  background: white;
  border: 0;
  padding-left: 10px;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}
.change-button {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
