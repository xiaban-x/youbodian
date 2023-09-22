<script>
import {ref} from "vue";
import ButtonGroup from "@/components/ButtonGroup.vue";
import BtnGreen from "@/components/BtnGreen.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

export default {
  components: {BtnGreen, ButtonGroup},
  data() {
    return {
      style: [
        {text: '功能异常'},
        {text: '建议优化'},
        {text: '其他'},
      ],
    }
  },
}
</script>

<template>
  <div>
    <Head>反馈记录</Head>
    <div class="littleTitle">
      <div class="red">*</div>
      <div>请选择反馈类型</div>
    </div>
    <ButtonGroup width="500px" height="200px" font-size="14px" :buttons-data="style" :max-buttons-per-row="6">
      <template #button-text="{ button }">
        {{ button.text }}
      </template>
    </ButtonGroup>
    <!--    请详细描述问题或意见-->
    <div class="littleTitle">
      <div class="red">*</div>
      <div>请详细描述问题或意见</div>
    </div>
    <textarea name="message"></textarea>
    <!--    请提供相关截图-->
    <div class="littleTitle2">
      <div>请提供相关截图</div>
      <div class="number">0/4</div>
    </div>
    <div class="screenshot">+</div>
    <div class="fixed-button-container">
      <!-- 按钮 -->
      <BtnGreen message="添加"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.littleTitle {
  display: flex;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0 0 14px;

  .red {
    margin: 2px;
    color: #FF5B5B;
  }
}

textarea {
  display: flex;
  width: 347px;
  height: 88px;
  margin: 0 auto;
  padding: 10px 14px;
  background: white;
  border-radius: 10px;
  border: 0.50px #EBEBEB solid;
  resize: none;
  margin-top: 14px;
}
/*提供截图*/
.littleTitle2 {
  display: flex;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0 0 14px;
  word-wrap: break-word;
  justify-content: space-between;
  align-items: stretch; /* 默认值，可省略 */

  .number {
    margin-right: 14px;
  }

}

.screenshot {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 88px;
  height: 88px;
  background: #F5F5F5;
  border-radius: 5px;
  border: 0.50px #D6D6D6 dotted;
  color: #D6D6D6 ;
  margin: 12px 14px;
}
/*按钮样式*/
.fixed-button-container {
  margin-top: 100px;
  text-align: center;
}
</style>