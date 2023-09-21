<script setup>
import router from '@/router'
import BtnGreen from '@/components/BtnGreen.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="ETNNav"
    title="添加评论"
  ></van-nav-bar>
  <div class="ACContainer">
    <div>添加评价</div>
    <form>
      <textarea
        class="editInfo"
        id="longText"
        name="longText"
        rows="20"
        cols="44"
        placeholder="在这里写下你的评论..."
      ></textarea>
    </form>
    <BtnGreen
      message="发布"
      style="margin-top: 170px; margin-bottom: 20px"
      @click="router.go(-1)"
    ></BtnGreen>
  </div>
</template>

<style scoped>
.ACContainer {
  padding-left: 14px;
  margin-top: 22px;
  .editInfo {
    background-color: #fff;
    border: none;
    padding: 9px 9px 0 9px;
    font-size: 14px;
    font-weight: 300;
    word-wrap: break-word;
    margin-top: 10px;
  }
}
</style>
