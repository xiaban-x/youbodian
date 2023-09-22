<script setup>
import router from '@/router'
</script>

<template>
  <div>
    <Head>订单详情</Head>
    <div class="obligation">
      <img src="@/assets/images/Rectangle 2211.png" />
      <div class="packageContent">
        <div class="package">套餐一</div>
        <div class="content">集中突破，冲刺高分</div>
        <div class="price">
          <div>实付金额:</div>
          <div class="red">￥ 400</div>
        </div>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="fixed-button-container">
      <span class="text">下单支付：</span>
      <span class="num">￥892</span>
      <span @click="router.push('/payPage')" class="btn210">下单支付</span>
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

/*按钮样式*/
.fixed-button-container {
  display: flex;
  background-color: #fff;
  align-items: center;
  margin-top: 328px;
  padding-bottom: 20px;
  padding-top: 4px;
  position: relative;
  bottom: 0;
  .text {
    margin-left: 15px;
    color: #292929;
    font-size: 12px;
    font-weight: 500;
    word-wrap: break-word;
  }
  .num {
    color: #ff4f4f;
    font-size: 17px;
    font-weight: 500;
    word-wrap: break-word;
  }
  .btn210 {
    margin-left: 32px;
    width: 210px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    background-color: #11d075;
    border-radius: 30px;
  }
}
</style>
