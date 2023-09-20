<template>
  <div>
    <Head>修改行业</Head>

    <van-checkbox-group v-model="checked" shape="square">
      <table>
        <tr>
          <td>
            <van-checkbox name="kuaiji" checked-color="#11d075"
              >会计</van-checkbox
            >
          </td>
        </tr>
        <tr>
          <td>
            <van-checkbox name="shenji" checked-color="#11d075"
              >审计</van-checkbox
            >
          </td>
        </tr>
        <tr>
          <td>
            <van-checkbox name="caiguan" checked-color="#11d075"
              >财管</van-checkbox
            >
          </td>
        </tr>
        <tr>
          <td>
            <van-checkbox name="shuifa" checked-color="#11d075"
              >税法</van-checkbox
            >
          </td>
        </tr>
        <tr>
          <td>
            <van-checkbox name="jinjifa" checked-color="#11d075"
              >经济法</van-checkbox
            >
          </td>
        </tr>

        <tr>
          <td>
            <van-checkbox name="zhanlue" checked-color="#11d075"
              >战略</van-checkbox
            >
          </td>
        </tr>
      </table>
    </van-checkbox-group>

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
  border-top:  0.50px #E8E8E8 solid;
  border-bottom:  0.50px #E8E8E8 solid;
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
    const checked = ref([
      'kuaiji',
      'shenji',
      'caiguan'
      // 'shuifa',
      // 'jinjifa',
      // 'zhanlue'
    ])
    return { checked }
  }
}
</script>
