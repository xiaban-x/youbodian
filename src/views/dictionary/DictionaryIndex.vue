<script setup>
import ImgSpanOne from '@/components/ImgSpanOne.vue'
import SpanDivOne from '@/components/SpanDivOne.vue'
</script>
<template>
  <div>这是字典</div>
  <Search></Search>
  <div class="book">
    <ImgSpanOne></ImgSpanOne>
    <ImgSpanOne></ImgSpanOne>
    <ImgSpanOne></ImgSpanOne>
    <ImgSpanOne></ImgSpanOne>
  </div>
  <SpanDivOne>
    <template #header> 每日学习打卡 </template>
  </SpanDivOne>
</template>

<style scoped>
.book {
  display: flex;
  flex-direction: row; /* 水平分布 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 居中 */
}
</style>
