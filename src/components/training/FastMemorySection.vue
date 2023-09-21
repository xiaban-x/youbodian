<script setup>
defineProps({
  chapterNumber: String,
  title: String,
  finished: Number,
  sum: Number,
  level: Number
})
</script>
<template>
  <div class="FMSContainer">
    <div class="longLine"></div>
    <div class="top">
      <div class="left">
        <div class="num">
          {{ chapterNumber }}
        </div>
        <div class="title">&nbsp;{{ title }}</div>
      </div>
      <div class="finishRate">
        <span>{{ finished }}/</span>
        <span>{{ sum }}题</span>
        <span>&nbsp;&nbsp;&gt;</span>
      </div>
    </div>
    <div class="bottom">
      <span>掌握程度：</span>
      <span v-for="(item, index) in parseInt(level)" :key="index">
        <img
          src="@/assets/training/Star.png"
          style="height: 20px; width: 20px"
          alt="星星{{item}}"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
.FMSContainer {
  width: 320px;
  height: 70px;
  .longLine {
    border: 1px #999 solid;
  }
  .top {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .finishRate {
      color: #999;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bottom {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
