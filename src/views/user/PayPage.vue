<script setup>
import router from '@/router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const checked = ref('1')
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="PPNav"
    title="支付结算"
  ></van-nav-bar>
  <div class="PPContainer">
    <div class="money">
      <span class="icon">￥</span>
      <span class="num">408.00</span>
    </div>
    <div class="realPayMoney">实际支付金额</div>
    <div class="payWays">
      <van-radio-group v-model="checked">
        <van-cell-group inset>
          <van-cell clickable @click="checked = '1'">
            <template #title>
              <div style="display: flex">
                <img
                  src="@/assets/user/WechatWay.png"
                  style="
                    border-radius: 5px;
                    width: 25px;
                    height: 25px;
                    background-color: #11d075;
                  "
                  alt=""
                />
                <span style="color: black; margin-left: 10px">微信支付</span>
              </div>
            </template>
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell clickable @click="checked = '2'">
            <template #title>
              <div style="display: flex">
                <img
                  src="@/assets/user/AliPayWay.png"
                  style="
                    border-radius: 5px;
                    width: 25px;
                    height: 25px;
                    padding: 3px;
                    background-color: #1890ff;
                  "
                  alt=""
                />
                <span style="color: black; margin-left: 10px">微信支付</span>
              </div>
            </template>
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell clickable @click="checked = '3'">
            <template #title>
              <div style="display: flex">
                <img
                  src="@/assets/user/InternetWay.png"
                  style="
                    border-radius: 5px;
                    width: 25px;
                    height: 25px;
                    background-color: #ff5a50;
                  "
                  alt=""
                />
                <span style="color: black; margin-left: 10px">微信支付</span>
              </div>
            </template>
            <template #right-icon>
              <van-radio name="3" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <BtnGreen message="立即支付" @click="router.push('/payInfo')"></BtnGreen>
  </div>
</template>

<style scoped>
.PPContainer {
  height: 650px;
  padding: 42px 14px 100px 14px;
  .money {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: #333333;
      font-size: 14px;
      font-weight: 500;
      word-wrap: break-word;
    }
    .num {
      color: #333333;
      font-size: 30px;
      font-weight: 500;
      word-wrap: break-word;
    }
  }
  .realPayMoney {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 59px;
    color: #999999;
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .payWays {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border-radius: 5px;
    width: 347px;
    margin-bottom: 220px;
  }
}
</style>
