<script setup>
defineProps({
  left: String,
  right: String
})
</script>
<template>
  <div class="ADSContainer">
    <div class="left">{{ left }}</div>
    <div class="right">{{ right }}</div>
  </div>
</template>

<style scoped>
.ADSContainer {
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  .left {
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .right {
    color: #292929;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
