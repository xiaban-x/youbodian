<script setup>
defineProps({
  title: String,
  score: Number,
  count: Number,
  text: String
})
</script>
<template>
  <div class="longLine"></div>

  <div class="FMSContainer">
    <div class="left">
      <div class="num">
        {{ title }}
      </div>
      <div class="scoreAndCount">
        <span>{{ score }}</span>
        <span>{{ count }}</span>
      </div>
    </div>
    <div class="right">{{ text }}</div>
  </div>
</template>

<style scoped>
.longLine {
  border: 1px #999 solid;
}
.FMSContainer {
  width: 320px;
  height: 70px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 5px;
  .left {
    display: flex;
    flex-direction: column;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .scoreAndCount {
      color: #292929;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      display: flex;
      justify-content: space-between;
      width: 150px;
      margin-top: 10px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    background-color: #f1f1f1;
    color: #11d075;
    border-radius: 40px;
  }
}
</style>
