<script setup>
import router from '@/router'
import FastMemorySection from '@/components/training/FastMemorySection.vue'
import { ref } from 'vue'
const activeNames = ref(['0'])
</script>
<template>
  <van-nav-bar title="选择科目" left-arrow @click-left="router.go(-1)">
    <template #right>
      <img
        src="@/assets/training/Setting.png"
        style="width: 20px; height: 20px"
        alt="全局设置"
        @click="router.push('/globalSetting')"
      />
    </template>
  </van-nav-bar>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="初级会计实务" name="1">
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <div class="longLine"></div>
    </van-collapse-item>
    <van-collapse-item title="经济基础法" name="2">
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <FastMemorySection
        chapter-number="第一章"
        title="总论"
        finished="6"
        sum="17"
        level="5"
        @click="router.push('/topicPage')"
      ></FastMemorySection>
      <div class="longLine"></div>
    </van-collapse-item>
  </van-collapse>
</template>

<style scoped>
.longLine {
  border: 1px #999 solid;
}
</style>
