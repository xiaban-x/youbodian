<template>
  <div class="custom-button" :style="buttonStyle">
    <span class="text-part-one" :style="{ color: textColorOne }">{{
      buttonText
    }}</span>
    <img :src="imageUrl" alt="按钮图标" class="image-part" />
    <span class="text-part-two" :style="{ color: textColorTwo }">{{
      additionalText
    }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  buttonText: String, // 第一部分文字
  imageUrl: Object | String, // 图片 URL
  additionalText: String, // 第三部分文字
  backgroundColor: String, // 背景颜色
  textColorOne: String, // 文字颜色
  textColorTwo: String // 文字颜色
})

const buttonStyle = computed(() => {
  return {
    backgroundColor: props.backgroundColor
  }
})
</script>

<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  width: 146px;
  height: 34px;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  user-select: none;
}

.text-part-one {
  flex: 0 0 32px; /* 不伸缩，固定宽度为 28px */
  margin-left: 17px; /* 左边距 17px */
  font-weight: 400;
  word-wrap: break-word;
  white-space: nowrap; /* 防止文字换行 */
  overflow: hidden; /* 防止文字溢出 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
}

.text-part-two {
  flex: 0 0 56px; /* 不伸缩，固定宽度为 56px */
  font-size: 12px;
  font-weight: 300;
  word-wrap: break-word;
  white-space: nowrap; /* 防止文字换行 */
  overflow: hidden; /* 防止文字溢出 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
}

.image-part {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
</style>
