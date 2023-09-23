<script setup>
import GlossaryNoMoney from '@/components/dictionary/GlossaryNoMoney.vue'
import router from '@/router'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="EGNav"
    title="更换生词本"
  ></van-nav-bar>
  <div class="EGContainer">
    <div class="EGTitle">
      <div>已有生词本</div>
      <div class="moreGlossary" @click="router.push('/addNewWordBook')">
        更多生词本 >
      </div>
    </div>
    <div class="EGMain" v-for="index in 6" :key="index">
      <div class="EGMain1">
        <GlossaryNoMoney></GlossaryNoMoney>
        <div class="learnGlossary">学这本</div>
      </div>
      <div class="longLine"></div>
    </div>
  </div>
</template>

<style scoped>
.EGNav {
  background-color: rgb(248, 248, 248);
}
.EGContainer {
  background-color: #fff;
  padding-left: 14px;
  .EGTitle {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .moreGlossary {
      color: #666666;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-right: 15px;
    }
  }
  .EGMain {
    .EGMain1 {
      display: flex;
      align-items: flex-end;
    }
    .learnGlossary {
      width: 83px;
      height: 30px;
      background: linear-gradient(
        269deg,
        #11d075 0%,
        rgba(17.35, 208.25, 116.62, 0.72) 100%
      );
      border-radius: 30px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      display: flex; /* 使用 Flexbox 布局 */
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */
      margin-bottom: 12px;
      margin-left: 20px;
    }
    .longLine {
      width: 375px;
      margin-left: -14px;
      border: 1px #c3c3c3 solid;
    }
  }
}
</style>
