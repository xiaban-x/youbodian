<template>
  <div>
    <Head>个人信息</Head>

    <!-- 头像，昵称，性别 -->
    <table>
      <tr>
        <td class="left-align">头像</td>
        <td class="right-align">
          <div class="head-picture">
            <img src="@/assets/images/my-class.jpg" alt="" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="left-align">昵称</td>
        <td class="right-align" @click="router.push('changeNickname')">
          我的城市没有海 >
        </td>
      </tr>
      <tr>
        <td class="left-align">性别</td>
        <td class="right-align" @click="router.push('changeGender')">男 ></td>
      </tr>
    </table>

    <!-- 已选行业 -->
    <table>
      <tr>
        <td class="left-align">已选行业</td>
        <td class="right-align" @click="router.push('changeProfession')">
          3个 >
        </td>
      </tr>
    </table>

    <!-- 手机，密码，微信，邮箱 -->
    <table>
      <tr>
        <td class="left-align">手机号码</td>
        <td class="right-align" @click="router.push('changeTel')">
          13500002345 >
        </td>
      </tr>
      <tr>
        <td class="left-align">登录密码</td>
        <td class="right-align" @click="router.push('changeCode')">修改 ></td>
      </tr>
      <tr>
        <td class="left-align">微信</td>
        <td class="right-align">未绑定 ></td>
      </tr>
      <tr>
        <td class="left-align">邮箱</td>
        <td class="right-align" @click="navigateToBindingPage">
          {{ isBound ? '已绑定 >' : '未绑定 >' }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

import { ref } from 'vue'

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
</script>

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
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
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
