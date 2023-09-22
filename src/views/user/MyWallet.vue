<script setup>
import router from '@/router'
import RunningWaterSection from '@/components/user/RunningWaterSection.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="MWNav"
    title="我的钱包"
  ></van-nav-bar>
  <div class="MWContainer">
    <div class="myMoney">
      <div class="text">我的余额</div>
      <div class="moneyAndEmbody">
        <div class="money">￥ 408.00</div>
        <div class="embody" @click="router.push('/embody')">提现</div>
      </div>
    </div>

    <div class="runningWater">
      <div class="text">收支明细</div>
      <RunningWaterSection>
        <template #title>注册佣金</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </RunningWaterSection>
      <RunningWaterSection>
        <template #title>注册佣金</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </RunningWaterSection>
      <RunningWaterSection>
        <template #title>注册佣金</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </RunningWaterSection>
      <RunningWaterSection>
        <template #title>注册佣金</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </RunningWaterSection>
    </div>
  </div>
</template>

<style scoped>
.MWContainer {
  margin-left: 14px;
  height: 800px;
  padding-top: 16px;
  padding-bottom: 100px;
  .myMoney {
    width: 347px;
    border-radius: 5px;
    padding: 17px 22px 22px 15px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .text {
      color: #222;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .moneyAndEmbody {
      align-items: center;
      display: flex;
      .money {
        color: #292929;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .embody {
        margin-left: 10px;
        color: #11d075;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .runningWater {
    .text {
      color: #222;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-left: 15px;
    }
    margin-top: 8px;
    width: 347px;
    background-color: #fff;
    border-radius: 5px;
    padding: 8px 0 33px 0;
  }
}
</style>
