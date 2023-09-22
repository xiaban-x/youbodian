<script setup>
import router from '@/router'
import ClassMain from '@/components/ClassMain.vue'
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="BSMNav"
    title="购买套餐"
  ></van-nav-bar>
  <div class="BSMContainer">
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
    <ClassMain @click="router.push('/highCourse')"></ClassMain>
  </div>
</template>

<style scoped>
.BSMContainer {
  margin-top: 13px;
  margin-left: 14px;
}
</style>
