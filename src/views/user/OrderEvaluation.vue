<script setup>
import BtnGreen from "@/components/BtnGreen.vue";

import { ref } from 'vue';
const value = ref(3);
</script>

<template>
  <div>
    <Head>订单详情</Head>

    <div class="obligation">
      <img src="@/assets/images/Rectangle 2211 (1).png"/>
      <div class="package">套餐一</div>
      <div class="content">集中突破，冲刺高分</div>
    </div>
    <!--打分-->
    <div class="message">
      <div class="row">请根据课程的感受打个分</div>
      <div class="row">
        <van-rate
            v-model="value"
            :size="22"
            color="#11D075"
            void-icon="star"
            void-color="#eee"
        />
      </div>
    </div>
    <!--填写感受-->
    <textarea name="message" placeholder="填写你对本课程的感受吧"></textarea>
    <div class="fixed-button-container">
      <BtnGreen message="提交"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.obligation {
  display: flex;
  flex-direction: column;
  margin: 27px auto 0 auto;
  padding: 0 15px;
  width: 347px;
  height: 219px;
  background: white;
  border-radius: 5px;

  .package {
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }

  .content {
    color: #999999;
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word;
    margin-top: 2px;
  }
}

img {
  display: flex;
  margin: 16px auto;
  width: 317px;
  height: 128px;
  background: linear-gradient(0deg, #962A2A 0%, #962A2A 100%);
  border-radius: 5px;
}

/*打分*/
.message {
  display: flex;
  width: 347px;
  padding-bottom: 18px;
  background: white;
  border-radius: 5px;
  margin: 9px auto;
  flex-direction: column;

  .row {
    display: flex;
    color: #292929;
    font-size: 16px;
    font-weight: 400;
    word-wrap: break-word;
    margin: 12px 0 0 19px;
    justify-content: space-between;
  }
}
/*文本域格式*/
textarea {
  display: flex;
  width: 347px;
  height: 192px;
  margin: 0 auto;
  padding: 10px 14px;
  background: white;
  border-radius: 10px;
  border: 0.50px #EBEBEB solid;
  resize: none;
}

textarea::placeholder {
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}
/*按钮样式*/
.fixed-button-container {
  margin-top: 50px;
  text-align: center;
}
</style>