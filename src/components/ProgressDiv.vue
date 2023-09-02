<script setup>
// import { ref } from 'vue'
// const value = ref(50)
// const isShow = ref(false)
</script>
<template>
  <div class="container">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
  <!--  <van-progress-->
  <!--    :percentage="value"-->
  <!--    stroke-width="7"-->
  <!--    color="linear-gradient(to left, #F57126, #FF8D236B)"-->
  <!--    :show-pivot="isShow"-->
  <!--  ></van-progress>-->
</template>

<style scoped>
.container {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .header {
    align-self: flex-start;
  }
  .main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    background-color: #fff;
    margin-top: 4px;
    align-self: flex-start;
  }
}
</style>
