<script setup>
import router from '@/router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const checked = ref('1')
</script>
<template>
  <div class="top">
    <div class="EPNav">
      <span @click="router.go(-1)">&lt;</span>
      <span style="margin-left: 150px">提现</span>
    </div>
    <div class="text1">可提现金额</div>
    <div class="money">
      <span class="moneyIcon">￥</span>
      <span class="num">528.00</span>
    </div>
  </div>
  <div class="EPContainer">
    <div class="bottom">
      <div class="text2">提现金额</div>
      <div class="moneyInput">
        <span class="moneyIcon">￥</span>
        <input class="inp" type="text" />
        <span class="allEmbody">全部提现</span>
      </div>
      <div class="longLine"></div>
      <div class="embodyTo">
        <span class="text3">提现至</span>
        <van-radio-group
          v-model="checked"
          direction="horizontal"
          checked-color="#11D075"
        >
          <van-radio name="1" label-position="left">
            <span class="wechat">
              <img
                src="@/assets/smallIcon/wechatLogin.png"
                style="width: 30px; height: 30px"
                alt="微信支付"
              />
            </span>
          </van-radio>
          <van-radio
            name="2"
            label-position="left"
            checked-color="#11D075"
            style="margin-left: 18px"
          >
            <span class="alipay">
              <img
                src="@/assets/user/Alipay.png"
                style="width: 30px; height: 30px"
                alt="支付宝支付"
              />
            </span>
          </van-radio>
        </van-radio-group>
      </div>
    </div>
  </div>
  <BtnGreen message="立即申请" style="margin-left: 14px; margin-bottom: 350px">
  </BtnGreen>
</template>

<style scoped>
.top {
  padding: 21px 0 44px 10px;
  background-color: #11d075;
  .EPNav {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .text1 {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 21px 0 4px 0;
  }
  .money {
    .moneyIcon {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .num {
      color: #fff;
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}
.EPContainer {
  margin-left: 14px;
  width: 347px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: -34px;
  padding: 12px 14px 22px 13px;
  .bottom {
    .text2 {
      margin-bottom: 14px;
      color: #292929;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .moneyInput {
      flex-direction: row;
      align-items: center;
      display: flex;

      .moneyIcon {
        color: #292929;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .inp {
        border: 1px #fff solid;
        height: 30px;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 247px;
      }
      .allEmbody {
        color: #11d075;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .longLine {
      border: 1px #ededed solid;
      margin-top: 2px;
      margin-bottom: 12px;
    }
    .embodyTo {
      flex-direction: row;
      align-items: center;
      display: flex;
      .text3 {
        color: #292929;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: 14px;
      }
      .wechat {
        border-radius: 10px;
      }
    }
  }
}
</style>
