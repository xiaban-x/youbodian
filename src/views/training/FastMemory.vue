<script setup>
import router from '@/router'
import { ref } from 'vue'
import FastMemorySection from '@/components/training/FastMemorySection.vue'
const activeNames = ref(['0'])
</script>
<template>
  <van-nav-bar
    title="标题"
    right-text="按钮"
    left-arrow
    @click-left="router.go(-1)"
  >
    <template #right>
      <img
        src="@/assets/training/Setting.png"
        style="height: 20px; width: 20px"
        alt="全局设置"
        @click="router.push('/globalSetting')"
      />
    </template>
  </van-nav-bar>
  <div class="FMContainer">
    <div class="barAndCount">
      <div class="bar">
        <div class="num">6/1242</div>
        <div class="text">总进度</div>
      </div>
      <div class="count">
        <div class="num">0</div>
        <div class="text">今日做题量</div>
      </div>
    </div>
    <div class="fastLearn">
      <div class="top">
        <div>快速学习</div>
        <div>
          <select class="FMSel">
            <option value="所有题目">所有题目</option>
            <option value="部分题目">部分题目</option>
            <option value="重点题目">重点题目</option>
          </select>
          <select class="FMSel">
            <option value="全部提醒">全部提醒</option>
            <option value="部分提醒">部分提醒</option>
            <option value="重点提醒">重点提醒</option>
          </select>
        </div>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="初级会计实务" name="1">
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <div class="longLine"></div>
        </van-collapse-item>
        <van-collapse-item title="经济基础法" name="2">
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <FastMemorySection
            chapter-number="第一章"
            title="总论"
            finished="6"
            sum="17"
            level="5"
            @click="router.push('/topicPage')"
          ></FastMemorySection>
          <div class="longLine"></div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<style scoped>
.FMContainer {
  width: 347px;
  height: 650px;
  margin-left: 14px;
  .barAndCount {
    display: flex;
    margin-top: 13px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .bar {
      border-radius: 7px;
      background: #11d075;
      width: 170px;
      height: 80px;
      margin-right: 7px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text {
        margin-top: 8px;
      }
    }
    .count {
      border-radius: 7px;
      background: #1890ff;
      width: 170px;
      height: 80px;
      margin-right: 7px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text {
        margin-top: 8px;
      }
    }
  }
  .fastLearn {
    border-radius: 7px;
    margin-top: 7px;
    padding: 13px 16px 40px 19px;
    background-color: #fff;
    .top {
      display: flex;
      justify-content: space-between;
    }
    .FMSel {
      border-radius: 5px;
      border: 1px solid #b9b9b9;
      background: #f4f4f6;
      padding: 3px 0 4px 7px;
      margin-left: 5px;
    }
  }
  .longLine {
    border: 1px #999 solid;
  }
}
</style>
