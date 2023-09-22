<script setup>
import Feedback from "@/components/user/Feedback.vue";
import BtnGreen from "@/components/BtnGreen.vue";
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>
    <Head>反馈记录</Head>
    <Feedback></Feedback>
    <Feedback></Feedback>
    <Feedback></Feedback>
    <div class="fixed-button-container">
      <!-- 按钮 -->
      <BtnGreen message="添加" @click="router.push('addFeedback')"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
.fixed-button-container {
  position: fixed;
  bottom: 20px; /* 距离底部的距离，根据需要调整 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 水平居中 */
  text-align: center;
}
</style>