<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref(['a', 'b'])
    return { checked }
  }
}
</script>
<template>
  <van-nav-bar left-arrow @click-left="$router.go(-1)" title="选择行业" />
  <van-checkbox-group v-model="checked" shape="square" class="container">
    <div class="profession">
      <van-checkbox class="check" name="a">&nbsp; 会计</van-checkbox>
    </div>
    <div class="profession">
      <van-checkbox class="check" name="b">&nbsp; 审计 </van-checkbox>
    </div>
    <div class="profession">
      <van-checkbox class="check" name="c">&nbsp; 财管</van-checkbox>
    </div>
    <div class="profession">
      <van-checkbox class="check" name="d">&nbsp; 税法</van-checkbox>
    </div>
    <div class="profession">
      <van-checkbox class="check" name="e">&nbsp; 经济法</van-checkbox>
    </div>
    <div class="profession">
      <van-checkbox class="check" name="f">&nbsp; 战略</van-checkbox>
    </div>
  </van-checkbox-group>
  <btnGreen message="下一步"></btnGreen>
</template>

<style scoped>
.container {
  background-color: #ffffff;
  .profession {
    padding-bottom: 10px;
    margin-top: 17px;
    border-bottom: 1px solid #dadada;
    .check {
      margin-left: 10px;
    }
  }
}
</style>
