<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
</script>

<template>
  <div>
    <Head>反馈详情</Head>
    <!--    反馈类型-->
    <div class="littleTitle">请选择反馈类型</div>
    <div class="feedback">
      <div class="feedbackStyle green">功能异常</div>
      <div class="feedbackStyle normal">建议优化</div>
      <div class="feedbackStyle normal">其他</div>
    </div>
    <!--问题详述-->
    <div class="littleTitle">请详细描述问题或意见</div>
    <p class="introduce">本产品体验很强</p>
    <!--提供截图    -->
    <div class="littleTitle2">
      <div>请提供相关截图</div>
      <div class="number">0/4</div>
    </div>
    <img src="@/assets/images/Rectangle2259.png" />
    <img src="@/assets/images/Rectangle2259.png" />

    <!--    处理说明-->
    <div class="littleTitle">处理说明</div>
    <div class="littleTitle" style="color: #11d074">处理中</div>
    <!--按钮-->
    <div class="fixed-button-container">
      <BtnGreen message="添加"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.littleTitle {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  margin: 16px 0 0 14px;
}

.feedback {
  display: flex;

  .feedbackStyle {
    width: 77px;
    height: 26px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    text-align: center;
    margin: 11px 0 0 14px;
  }

  .green {
    background: #11d075;
    color: white;
  }

  .normal {
    border: 1px #d6d6d6 solid;
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
}

/*详述问题*/
p {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  word-wrap: break-word;
  text-align: justify;
}

.introduce {
  width: 347px;
  height: 88px;
  background: white;
  margin: 12px auto;
  padding: 10px 14px;
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

/*截图*/
img {
  width: 88px;
  height: 88px;
  background: linear-gradient(0deg, #f5f5f5 0%, #f5f5f5 100%);
  border-radius: 5px;
  margin: 12px 0 0 14px;
}

/*按钮样式*/
.fixed-button-container {
  margin-top: 100px;
  text-align: center;
}
</style>
