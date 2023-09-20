<script setup>
import router from '@/router'
import TopicShape from '@/components/training/TopicShape.vue'
import { ref } from 'vue'
import Btn167 from '@/components/Btn167.vue'
const topic = ref({
  title: '单选题'
})

const count = ref(27)
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="ARNav"
    title="做题结果"
  ></van-nav-bar>
  <div class="ARContainer">
    <div class="text">
      <div class="top">
        <div class="spendTime">做题时长： 30分50秒</div>
        <div class="submitTime">交卷时间： 3022-07-05 20:10</div>
      </div>
      <div class="score">
        <span class="scoreRateText">得分率</span>
        <span class="scoreRate">70%</span>
      </div>
    </div>
    <div class="shape">
      <div class="title" v-for="(item, index) in topic" :key="index">
        {{ item }}
      </div>
      <TopicShape
        class="topicCircle"
        backgroundColor="#11D075"
        fontColor="#ffffff"
        borderStyle="1px solid #11D075"
        v-for="(item2, index2) in count"
        :key="index2"
      >
        {{ item2 }}
      </TopicShape>

      <div class="title" v-for="(item, index) in topic" :key="index">
        {{ item }}
      </div>
      <TopicShape
        class="topicCircle"
        v-for="(item2, index2) in count"
        :key="index2"
      >
        {{ item2 }}
      </TopicShape>
    </div>
    <Btn167
      @click="router.push('/analysisTopic')"
      message="全部解析"
      style="margin-right: 13px"
    ></Btn167>
    <Btn167 @click="router.push('/analysisTopic')" message="错题解析"></Btn167>
  </div>
</template>

<style scoped>
.ARContainer {
  margin-left: 14px;
  .text {
    width: 347px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: #fff;
    padding: 13px 12px 0 13px;
    .top {
      display: flex;
      justify-content: space-between;
      .spendTime {
        color: #666;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
      .submitTime {
        color: #666;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    .score {
      margin-top: 19px;
      .scoreRateText {
        color: #292929;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .scoreRate {
        color: #000;
        font-size: 27px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .shape {
    display: flex;
    flex-wrap: wrap;
    width: 347px;
    background-color: #fff;
    border-radius: 10px;
    padding-bottom: 18px;
    margin-top: 15px;
    margin-bottom: 50px;

    .title {
      width: 100%;
      color: black;
      font-size: 14px;
      font-weight: 300;
      word-wrap: break-word;
      margin-top: 5px;
      margin-left: 15px;
    }

    .topicCircle {
      flex: 0 0 calc(100% / 7 - 20px); /* 每行最多显示7个，减去外边距 */
    }
  }
}
</style>
