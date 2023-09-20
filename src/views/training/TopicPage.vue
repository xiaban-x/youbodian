<script setup>
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'

const topicTitle = ref('下列关于会计基础的表述，不正确的是（）。')
const topicOptions = ref([
  'A.在会计分期的前提下，会计确认、计量和 报告应该以企业持续、正常的生产经营活动 为前提',
  'B.在会计分期的前提下，会计确认、计量',
  'C.持续经营确定了会计核算的空间范围',
  'D.会计分期确立了会计核算的时间范围'
])
</script>

<template>
  <div class="TPContainer">
    <div class="top">
      <div class="goPre">
        <img
          src="@/assets/training/Back.png"
          style="width: 14px; height: 14px"
          alt="返回"
          @click="router.go(-1)"
        />
      </div>
      <div class="icons">
        <img
          src="@/assets/training/Share.png"
          style="width: 27px; height: 27px"
          alt="分享"
          @click="router.push('/topicShare')"
        />
        <div class="timeCon">
          <img
            src="@/assets/training/Time.png"
            style="width: 27px; height: 27px"
            alt="时间"
          />
          <span class="spendTime">06:15</span>
        </div>
        <img
          src="@/assets/training/Collected.png"
          style="width: 27px; height: 27px"
          alt="收藏"
        />
        <img
          src="@/assets/training/Date.png"
          style="width: 27px; height: 27px"
          alt="答题卡"
          @click="router.push('/answerSheet')"
        />
      </div>
    </div>
    <div class="title">
      <div class="topicCount">单选题1/30</div>
      <div class="topicNum">题号：5113232154</div>
    </div>
    <div class="topicMain">
      <div class="topicTitle">{{ topicTitle }}</div>
      <div
        class="topicOptions"
        v-for="(item, index) in topicOptions"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <BtnGreen message="下一题" @click="router.push('/topicPage')"></BtnGreen>
  </div>
</template>

<style scoped>
.TPContainer {
  padding-left: 14px;
  padding-right: 14px;
  width: 375px;
  padding-top: 21px;
  background: linear-gradient(180deg, #42e496 0%, rgba(231, 255, 243, 0) 100%);
  .top {
    display: flex;
    justify-content: space-between;
    .goPre {
      color: #fff;
      font-size: 24px;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      width: 135px;
      margin-right: 12px;
      .timeCon {
        display: flex;
        flex-direction: column;
        .spendTime {
          color: #fff;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 10px;
    .topicCount {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .topicNum {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .topicMain {
    width: 347px;
    border-radius: 10px;
    background: #fff;
    padding-bottom: 38px;
    margin-bottom: 126px;
    .topicTitle {
      padding-top: 20px;
      padding-left: 15px;
      padding-bottom: 7px;
      color: #333;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .topicOptions {
      width: 300px;
      border-radius: 5px;
      background: #f9f9f9;
      margin-top: 11px;
      margin-left: 24px;
      padding: 13px 17px 13px 17px;
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
