<script setup>
import Head from '@/components/Head.vue'
import DistributionSection from '@/components/user/DistributionSection.vue'
</script>

<template>
  <Head>我的分销</Head>
  <div class="MDContainer">
    <div class="data">
      <div class="dataCon">
        <div class="text">注册人数</div>
        <div class="count">45</div>
      </div>
      <div class="dataCon">
        <div class="text">购买人数</div>
        <div class="count">210</div>
      </div>
      <div class="dataCon">
        <div class="text">累积收益</div>
        <div class="count">58.42</div>
      </div>
    </div>
    <div class="distributionDetail">
      <DistributionSection>
        <template #title>用户老王</template>
        <template #source>注册</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </DistributionSection>
      <DistributionSection>
        <template #title>用户老王</template>
        <template #source>注册</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </DistributionSection>
      <DistributionSection>
        <template #title>用户老王</template>
        <template #source>注册</template>
        <template #time>2022.05.12 12:16</template>
        <template #money>250.00</template>
      </DistributionSection>
    </div>
  </div>
</template>

<style scoped>
.MDContainer {
  padding-bottom: 50px;
  height: 600px;
  margin-left: 14px;
  margin-right: 14px;
  margin-top: 17px;
  .data {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 9px;
    padding: 16px 30px;
    .dataCon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .count {
        color: #292929;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .distributionDetail {
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 41px;
  }
}
</style>
