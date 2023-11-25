<script setup>
import { useRouter } from 'vue-router'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
const router = useRouter()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="SBTDNav"
    title="真题例句"
  ></van-nav-bar>
  <div class="RTContainer">
    <BilingualExample class="BEx">
      <template #header>
        You can usually also personalize a coIt seems only reasonable to ask
        students to buy a dictionary.</template
      >
      <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
      <template #footer> 来源：2022年高考 北京卷</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header>
        You can usually also personalize a coIt seems only reasonable to ask
        students to buy a dictionary.</template
      >
      <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
      <template #footer> 来源：2022年高考 北京卷</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header>
        You can usually also personalize a coIt seems only reasonable to ask
        students to buy a dictionary.</template
      >
      <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
      <template #footer> 来源：2022年高考 北京卷</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header>
        You can usually also personalize a coIt seems only reasonable to ask
        students to buy a dictionary.</template
      >
      <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
      <template #footer> 来源：2022年高考 北京卷</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header>
        You can usually also personalize a coIt seems only reasonable to ask
        students to buy a dictionary.</template
      >
      <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
      <template #footer> 来源：2022年高考 北京卷</template>
    </BilingualExample>
  </div>
</template>

<style scoped>
.RTContainer {
  margin-left: 14px;
  .BEx {
    margin-top: 13px;
  }
}
</style>
