<script setup>
import ClassMain from '@/components/ClassMain.vue'
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <!-- <div>这是备考训练</div> -->

  <div>
    <Head>线上课程</Head>
    <select class="time" id="group" value="1">
      <!-- <div><img src="@/assets/images/drop-down-arrow.png" alt=""></div> -->
      <option value="1">
        时间倒序
        <img src="@/assets/images/drop-down-arrow.png" alt="" />
      </option>
      <option value="2">时间正序</option>
    </select>
    <div class="online-course">
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
      <ClassMain></ClassMain>
    </div>
  </div>
</template>

<style scoped>
.time {
  width: 94px;
  height: 30px;
  background: #f6f6f6;
  border-radius: 30px;
  margin-top: 17px;
  margin-left: 14px;
  text-align: center;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url('@/assets/images/drop-down-arrow.png') no-repeat right 8px
    center;
}

.online-course {
  margin-left: 14px;
  margin-top: 26px;
  overflow: hidden;
}
</style>
