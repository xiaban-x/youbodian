<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="LDNav"
    title="添加生词本"
  ></van-nav-bar>
  <div class="AGMain" v-for="index in 6" :key="index">
    <div class="AGMain1">
      <GlossaryMoney @click="router.push('/glossaryDetail')"></GlossaryMoney>
      <div class="learnGlossary" @click="router.push('/glossaryDetail')">
        免费领取
      </div>
    </div>
    <div class="longLine"></div>
  </div>
</template>

<style scoped>
.AGMain {
  margin-left: 14px;
  .AGMain1 {
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
    border: 0.25px #c3c3c3 solid;
  }
}
</style>
