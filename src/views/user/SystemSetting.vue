<script setup>
import { useRouter } from 'vue-router'
import BtnGreen from '@/components/BtnGreen.vue'

const router = useRouter()

const logout = () => {
  localStorage.clear()
  router.push('/login')
}
</script>

<template>
  <div class="main">
    <Head>系统设置</Head>
    <table>
      <tr>
        <td class="left-align">版本信息</td>
        <td class="right-align" @click="router.push('versionInformation')">
          版本3.0 >
        </td>
      </tr>
      <tr>
        <td class="left-align">关于我们</td>
        <td class="right-align" @click="router.push('aboutUs')">></td>
      </tr>
      <tr>
        <td class="left-align">用户协议</td>
        <td class="right-align" @click="router.push('serviceAgreement')">></td>
      </tr>
      <tr>
        <td class="left-align">隐私政策</td>
        <td class="right-align" @click="router.push('privacyPolicy')">></td>
      </tr>
    </table>
    <table>
      <tr>
        <td class="left-align">全局设置</td>
        <td class="right-align" @click="router.push('globalSetting')">></td>
      </tr>
    </table>
    <table>
      <tr>
        <td class="left-align">注销账号</td>
        <td class="right-align" @click="router.push('/cancelAccount')">></td>
      </tr>
    </table>
    <div class="change-button">
      <BtnGreen message="退出登录" @click="logout"></BtnGreen>
    </div>
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
  padding: 14px;
}

.left-align {
  text-align: left;
  color: #292929;
  font-size: 14px;
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

/* 设置表格横边框，去掉竖边框 */
td {
  border-top: 0.5px #e8e8e8 solid;
  border-bottom: 0.5px #e8e8e8 solid;
  height: 55px;
}

/* 去掉第一列的左边框 */
td:first-child {
  border-left: none;
}

/* 去掉最后一列的右边框 */
td:last-child {
  border-right: none;
}
/*按钮*/
.main {
  position: relative;
}
.change-button {
  position: fixed;
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
