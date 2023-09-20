<script setup>
import router from '@/router'
import { ref } from 'vue'
import TopicShape from '@/components/training/TopicShape.vue'
import BtnGreen from '@/components/BtnGreen.vue'
const topic = ref({
  title: '单选题'
})

const count = ref(27)
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="CENav"
    title="答题卡"
  ></van-nav-bar>
  <div class="ASContainer">
    <div class="card">
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
    <BtnGreen
      @click="router.push('/answerResult')"
      message="提交并查看结果"
    ></BtnGreen>
  </div>
</template>

<style scoped>
.ASContainer {
  margin-left: 14px;
  .card {
    display: flex;
    flex-wrap: wrap;
    width: 347px;
    background-color: #fff;
    border-radius: 10px;
    padding-bottom: 18px;
    margin-top: 15px;
    margin-bottom: 100px;
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
