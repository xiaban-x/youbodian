<script setup></script>
<template>
  <div class="container">
    <img src="src/assets/dictionary/NoteBook.png" />
    <div class="introduce">笔记本</div>
  </div>
</template>

<style scoped>
.container {
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
  }
}
</style>
