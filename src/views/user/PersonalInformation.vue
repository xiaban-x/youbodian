<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getUserInfoService } from '@/api/user'
const userStore = useUserStore()
function navigateToBindingPage() {
  if (isBound.value) {
    // 已绑定，跳转到解除绑定页面
    router.push('/changeEmail') // 假设解除绑定页面的路由路径是 '/unbind-page'
  } else {
    // 未绑定，跳转到绑定邮箱页面
    router.push('/bindEmail') // 假设绑定邮箱页面的路由路径是 '/bind-email-page'
  }
}
const isBound = ref(false) // 假设初始状态是未绑定

const access_token = localStorage.getItem('access_token')
// const refresh_token = localStorage.getItem('refresh_token')
const token_type = localStorage.getItem('token_type')
// 调用getUserInfoService并携带自定义请求头
const customHeaders = ref({
  Authorization: `${token_type} ${access_token}` // 替换为你的自定义授权令牌
})
const getUserInfo = async () => {
  try {
    const data = await getUserInfoService(customHeaders.value.Authorization)
    // // 在这里处理响应数据，可以根据需要进行操作
    // 这里可以继续执行其他逻辑，使用响应的值
    userStore.setUserInfo({
      gender: data.gender,
      displayName: data.displayName,
      avatar: data.avatar,
      location: data.location,
      email: data.email,
      phone: data.phone,
      education: data.education,
      wechat: data.wechat
    })
    console.log(data)
  } catch (error) {
    // 处理错误
    console.error('获取登录失败：', error)
  }
}

getUserInfo()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <div>
    <Head>个人信息</Head>

    <!-- 头像，昵称，性别 -->
    <table>
      <tr>
        <td class="left-align">头像</td>
        <td class="right-align">
          <div class="head-picture">
            <img src="@/assets/images/my-class.jpg" alt="头像" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="left-align">昵称</td>
        <td class="right-align" @click="router.push('changeNickname')">
          {{ userStore.displayName }} >
        </td>
      </tr>
      <tr>
        <td class="left-align">性别</td>
        <td
          class="right-align"
          @click="router.push('changeGender')"
          v-if="userStore.gender"
        >
          {{ userStore.gender }} >
        </td>
        <td class="right-align" v-else @click="router.push('changeGender')">
          去选择 >
        </td>
      </tr>
    </table>

    <!-- 已选行业 -->
    <table>
      <tr>
        <td class="left-align">已选行业</td>
        <td class="right-align" @click="router.push('changeProfession')">
          3 >
        </td>
      </tr>
    </table>

    <!-- 手机，密码，微信，邮箱 -->
    <table>
      <tr>
        <td class="left-align">手机号</td>
        <td
          class="right-align"
          v-if="userStore.phone"
          @click="router.push('changeTel')"
        >
          {{ userStore.phone }}
        </td>
        <td class="right-align" v-else @click="router.push('changeTel')">
          去绑定 >
        </td>
      </tr>
      <tr>
        <td class="left-align">登录密码</td>
        <td class="right-align" @click="router.push('changeCode')">修改 ></td>
      </tr>
      <tr>
        <td class="left-align">微信</td>
        <td class="right-align" v-if="userStore.wechat">
          {{ userStore.wechat }}
        </td>
        <td class="right-align" v-else>未绑定 ></td>
      </tr>
      <tr>
        <td class="left-align">邮箱</td>
        <td
          class="right-align"
          v-if="userStore.email"
          @click="navigateToBindingPage"
        >
          {{ userStore.email }}
        </td>
        <td class="right-align" v-else @click="navigateToBindingPage">
          未绑定 >
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 11.5px;
  background-color: white;
}

td {
  padding: 10px;
}

.left-align {
  text-align: left;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}

.right-align {
  text-align: right;
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}
.right-align .head-picture {
  border-radius: 50%;
  height: 26px;
  width: 26px;
  margin: 0;
  float: right;
}

.right-align .head-picture img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
/* 设置表格横边框，去掉竖边框 */
td {
  border-top: 0.5px #e8e8e8 solid;
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
</style>
