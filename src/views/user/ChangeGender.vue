<template>
  <div>
    <Head>修改性别</Head>

    <van-radio-group v-model="checked">
      <table>
        <tr>
          <td>
            <van-radio name="man" checked-color="#11d075">男</van-radio>
          </td>
        </tr>
        <tr>
          <td>
            <van-radio name="woman" checked-color="#11d075">女</van-radio>
          </td>
        </tr>
        <tr>
          <td>
            <van-radio name="unknow" checked-color="#11d075">未知</van-radio>
          </td>
        </tr>
      </table>
    </van-radio-group>
    <div class="change-buttom">
      <BtnGreen message="确认修改"></BtnGreen>
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
<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref('1')
    return { checked }
  }
}
</script>
