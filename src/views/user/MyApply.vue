<script setup>
import router from '@/router'
import ApplySection from '@/components/user/ApplySection.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="MANav"
    title="我的报名"
  ></van-nav-bar>
  <div class="MAContainer">
    <ApplySection @click="router.push('/applyDetail')">
      <template #title>注册佣金</template>
      <template #time>2022.05.12 12:16</template>
      <template #teachClass>线下课程</template>
    </ApplySection>
    <ApplySection @click="router.push('/applyDetail')">
      <template #title>注册佣金</template>
      <template #time>2022.05.12 12:16</template>
      <template #teachClass>线下课程</template>
    </ApplySection>
    <ApplySection @click="router.push('/applyDetail')">
      <template #title>注册佣金</template>
      <template #time>2022.05.12 12:16</template>
      <template #teachClass>线下课程</template>
    </ApplySection>
  </div>
</template>

<style scoped>
.MAContainer {
  margin-left: 14px;
  padding-top: 17px;
  height: 700px;
  padding-bottom: 50px;
}
</style>
