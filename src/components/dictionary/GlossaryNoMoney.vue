<template>
  <div class="my-class">
    <img class="my-class-image" src="src/assets/dictionary/GlossaryImg.png" />
    <div class="my-class-container">
      <div class="my-class-title">TOEFL必备词汇</div>
      <div class="my-class-text">4264词</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.my-class {
  display: flex;
  .my-class-container {
    display: flex;
    flex-direction: column;
  }
}
.my-class .my-class-image {
  background: linear-gradient(0deg, #e0f8ec 0%, #e0f8ec 100%);
  border-radius: 5px;
  margin: 12px 15px 12px 0;
}

.my-class .my-class-title {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  padding-top: 12px;
}

.my-class .my-class-text {
  color: #7c7c7c;
  font-size: 12px;
  font-weight: 300;
  word-wrap: break-word;
  margin-top: 4px;
}

.my-class .my-class-price {
  color: #ff5c5c;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 30px;
}
</style>
