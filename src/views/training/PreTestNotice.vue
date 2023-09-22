<script setup>
import router from '@/router'
import { reactive } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'

const topicClass = reactive([
  {
    title: '单选题',
    content:
      '本题型共13小题，每小题2分，共26分，每小题只有 一个正确答案，请从每小题的备选答案中选出一个 你认为正确的答案，用鼠标点击相应的选项。'
  },
  {
    title: '多选题',
    content:
      '本题型共12小题，每小题2分，共24分，每小题均有 多个正确答案，请从每小题的备选答案中选出你认 为正确的答案，用鼠标点击相应的选项。每小题所 有答案选择正确的得分，不答、错答、漏答均不得分。'
  }
])
</script>

<template>
  <van-nav-bar title="历年真题" left-arrow @click-left="router.go(-1)" />

  <div class="PTNContainer">
    <div class="top">时长：180分钟 总分：100分 总题：29题</div>
    <div class="part" v-for="(item, index) in topicClass" :key="index">
      <div class="title">{{ index + 1 }}、{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
    <BtnGreen
      message="进入"
      @click="router.push('/topicPage')"
      style="margin-top: 200px"
    ></BtnGreen>
  </div>
</template>

<style scoped>
.PTNContainer {
  padding: 19px 14px 53px 14px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #292929;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 21px;
  }
  .part {
    background-color: #fff;
    border-radius: 10px;
    width: 347px;
    margin-bottom: 15px;
    padding: 11px 13px 6px 15px;
    .title {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 8px;
    }
    .content {
      color: #666;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
