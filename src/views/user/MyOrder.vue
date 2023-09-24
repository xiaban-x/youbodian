<script setup>
import { ref } from 'vue'

const activeName = ref('a')
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>
    <Head>我的订单</Head>
    <van-tabs
      v-model:active="activeName"
      line-height="2px"
      line-width="42px"
      color="#11D075"
    >
      <van-tab title="待付款" name="obligation">
        <div class="obligation" @click="router.push('orderDetails')">
          <img src="../../assets/images/Rectangle2211.png" />
          <div class="packageContent">
            <div class="package">套餐一</div>
            <div class="content">集中突破，冲刺高分</div>
            <div class="price">
              <div>实付金额:</div>
              <div class="red">￥ 400</div>
            </div>
            <div class="payButton">
              <div class="buttonStyle cancel">取消订单</div>
              <div class="buttonStyle pay">去支付</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成" name="b">
        <div class="obligation" @click="router.push('orderDetailsEvaluation')">
          <img src="../../assets/images/Rectangle2211.png" />
          <div class="packageContent">
            <div class="package">套餐一</div>
            <div class="content">集中突破，冲刺高分</div>
            <div class="price">
              <div>实付金额:</div>
              <div class="red">￥ 400</div>
            </div>
            <div class="payButton">
              <div class="buttonStyle pay">去评价</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="经取消" name="c">
        <div class="obligation">
          <img src="../../assets/images/Rectangle2211.png" />
          <div class="packageContent">
            <div class="package">套餐一</div>
            <div class="content">集中突破，冲刺高分</div>
            <div class="price">
              <div>实付金额:</div>
              <div class="red">￥ 400</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
      padding: 14px 24px;
      flex-direction: row;

      .red {
        color: red;
      }
    }

    .payButton {
      display: flex;
      flex-direction: row;
      margin-right: 19px;
      margin-bottom: 19px;
      margin-left: auto;

      .buttonStyle {
        display: flex;
        height: 27px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 400;
        word-wrap: break-word;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        text-align: center;
        padding: 0 10px;
        margin-left: 8px;
      }
      .cancel {
        border: 0.5px #dddddd solid;
        color: #666666;
      }
      .pay {
        background-color: #11d074;
        color: white;
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
</style>
