<script setup></script>
<template>
  <div class="container">
    <slot name="image"></slot>
    <!-- 图片插槽 -->
    <div class="introduce">
      <slot name="text"></slot>
      <!-- 文字插槽 -->
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  display: flex;
  flex-direction: column; /* 垂直分布 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  img {
    max-width: 100%; /* 图片宽度不超过容器 */
    height: auto; /* 保持图片纵横比 */
  }
  .introduce {
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    width: 56px;
  }
}
</style>
