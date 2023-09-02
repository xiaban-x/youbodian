<script setup>
defineProps({
  ImgColor: String
})
</script>
<template>
  <div class="info-card">
    <div class="image" :style="{ backgroundColor: ImgColor }">
      <slot name="image"></slot>
    </div>
    <div class="text">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.image {
  flex-shrink: 0; /* 图片不缩小 */
  border-radius: 5px; /* 圆形背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 40px;
}

.text {
  flex-grow: 1; /* 文本部分占满可用空间 */
}

.title {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}

.content {
  color: #7c7c7c;
  font-size: 12px;
  font-weight: 300;
  word-wrap: break-word;
}
</style>
