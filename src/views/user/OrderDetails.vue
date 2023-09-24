<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
</script>

<template>
  <div>
    <Head>订单详情</Head>
    <div class="obligation">
      <img src="@/assets/images/Rectangle2211.png" />
      <div class="packageContent">
        <div class="package">套餐一</div>
        <div class="content">集中突破，冲刺高分</div>
        <div class="price">
          <div>实付金额:</div>
          <div class="red">￥ 400</div>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="row">结算信息</div>
      <div class="row">
        <div class="information">实际支付金额</div>
        <div class="detail">￥ 400</div>
      </div>
    </div>
    <div class="message">
      <div class="row">订单信息</div>
      <div class="row">
        <div class="information">创建时间</div>
        <div class="detail">2023.07.11 12:00:21</div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="fixed-button-container">
      <BtnGreen message="去支付"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.obligation {
  display: flex;
  margin: 17px auto;
  width: 347px;
  height: 205px;
  background: white;
  border-radius: 5px;

  .packageContent {
    width: calc(100% - 165px);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    .package {
      color: #292929;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-top: 13px;
    }

    .content {
      color: #999999;
      font-size: 12px;
      font-weight: 400;
      word-wrap: break-word;
      margin-top: 2px;
    }

    .price {
      display: flex;
      color: #292929;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-left: auto;
      margin-top: auto;
      padding: 19px 24px;
      flex-direction: row;

      .red {
        color: red;
      }
    }
  }
}

img {
  display: flex;
  width: 131px;
  height: 171px;
  background: linear-gradient(0deg, #962a2a 0%, #962a2a 100%);
  border-radius: 10px;
  margin: 15px 17px 0 15px;
}

.message {
  display: flex;
  width: 347px;
  height: 84px;
  background: white;
  border-radius: 5px;
  margin: 8px auto;
  flex-direction: column;

  .row {
    display: flex;
    color: #292929;
    font-size: 16px;
    font-weight: 400;
    word-wrap: break-word;
    margin: 12px 0 0 19px;
    justify-content: space-between;

    .information {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
    .detail {
      margin-right: 19px;
    }
  }
}

/*按钮样式*/
.fixed-button-container {
  margin-top: 100px;
  text-align: center;
}
</style>
