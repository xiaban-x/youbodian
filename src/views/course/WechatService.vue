<script setup>
import router from '@/router'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="WSNav"
    title="微信客服"
    style="margin-bottom: 19px"
  ></van-nav-bar>
  <div class="WSContainer">
    <div class="WSCon">
      <div class="image"></div>
      <div class="text">长按添加企业微信客服咨询</div>
    </div>
  </div>
</template>

<style scoped>
.WSContainer {
  height: 600px;
  .WSCon {
    background-color: #fff;
    margin-left: 14px;
    width: 347px;
    height: 157px;
    border-radius: 10px;
    padding: 28px 42px 30px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .image {
      width: 99px;
      height: 99px;
      border-radius: 5px;
      background-color: #d9d9d9;
    }
    .text {
      color: #292929;
      font-size: 14px;
      font-weight: 500;
      word-wrap: break-word;
      margin-left: 14px;
    }
  }
}
</style>
