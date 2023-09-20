<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const isBound = ref(true) // 假设初始状态是已绑定
    const router = useRouter()

    const confirmUnbindAndGoBack = () => {
      // 在这里执行解绑操作，例如发送解绑请求到服务器

      // 解绑成功后，切换 isBound 的值为相反的布尔值
      isBound.value = !isBound.value

      // 使用路由的 go(-1) 方法返回上一页
      router.go(-1)
    }

    return {
      isBound,
      confirmUnbindAndGoBack
    }
  }
}
</script>

<template>
  <div>
    <Head>修改邮箱</Head>
    <table>
      <tr>
        <td class="left-align">当前绑定的邮箱账号：</td>
        <td class="right-align">5263231@qq.com</td>
      </tr>
    </table>
    <div class="change-buttom">
      <BtnGreen message="确认解绑" @click="confirmUnbindAndGoBack"></BtnGreen>
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
  padding: 0 10px;
}

.left-align {
  text-align: left;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}
.left-align {
  background: white;
  border: 0;
  padding-left: 10px;
  color: #292929;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.right-align {
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  padding-right: 18px;
  word-wrap: break-word;
  color: #11d074;
  border: none;
}

/* 设置表格横边框，去掉竖边框 */
td {
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
.change-buttom {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
