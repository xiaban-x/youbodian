<script setup>
import search from '@/assets/dictionary/search.svg'
import camera from '@/assets/dictionary/camera.svg'

const icon = {
  search,
  camera
}
</script>
<template>
  <div class="SearchContainer">
    <img class="search" :src="icon.search" alt="搜索" />
    <input
      class="inp"
      maxlength="11"
      placeholder="请输入关键字进行查询"
      type="text"
    />
    <a class="camera"><img :src="icon.camera" alt="拍照" /></a>
  </div>
</template>

<style scoped>
.SearchContainer {
  width: 347px;
  height: 50px;
  background: white;
  border-radius: 7px;
  border: 0.5px #616161 solid;
  display: flex;
  align-items: center;
  .search {
    margin-left: 14px;
  }
  .inp {
    border: none; /* Remove border */
    outline: none; /* Remove outline */
    color: #bebebe;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    margin-left: 16.5px;
    margin-right: 60px;
    width: 196px;
  }
}
</style>
