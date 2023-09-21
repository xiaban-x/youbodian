<script setup>
import router from '@/router'
import NoteEditForm from '@/components/NoteEditForm.vue'
import BtnGreen from '@/components/BtnGreen.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="ETNNav"
    title="编辑笔记"
  ></van-nav-bar>
  <div class="ETNContainer">
    <div style="margin-bottom: 10px">我的笔记</div>
    <NoteEditForm rows="20"></NoteEditForm>
    <BtnGreen message="发布" style="margin-top: 100px"></BtnGreen>
  </div>
</template>

<style scoped>
.ETNContainer {
  margin-left: 14px;
  padding-top: 20px;
}
</style>
