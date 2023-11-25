<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'
const checked = ref('male')
import { useUserStore } from '@/stores/user'
import { updateUserInfoService } from '@/api/user'
import { ref } from 'vue'
const userStore = useUserStore()
const access_token = localStorage.getItem('access_token')
// const refresh_token = localStorage.getItem('refresh_token')
const token_type = localStorage.getItem('token_type')
// 调用getUserInfoService并携带自定义请求头
const headers = ref({
  Authorization: `${token_type} ${access_token}` // 替换为你的自定义授权令牌
})
const changeGender = async () => {
  try {
    const data = await updateUserInfoService(
      checked.value,
      userStore.displayName,
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
    console.error('修改性别失败：', error)
  }
  router.go(-1)
}
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <div>
    <Head>修改性别</Head>

    <van-radio-group v-model="checked">
      <table>
        <tr>
          <td>
            <van-radio name="male" checked-color="#11d075">男</van-radio>
          </td>
        </tr>
        <tr>
          <td>
            <van-radio name="female" checked-color="#11d075">女</van-radio>
          </td>
        </tr>
      </table>
    </van-radio-group>
    <div class="change-button">
      <BtnGreen message="确认修改" @click="changeGender"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

td {
  padding: 10px;
}
/* 设置表格横边框，去掉竖边框 */
td {
  border-bottom: 0.5px #e8e8e8 solid;
  height: 44px;
}

/* 去掉第一列的左边框 */
td:first-child {
  border-left: none;
}

/* 去掉最后一列的右边框 */
td:last-child {
  border-right: none;
}
.change-button {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
