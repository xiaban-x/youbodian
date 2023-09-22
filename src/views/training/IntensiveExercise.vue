<script setup>
import router from '@/router'
import Btn64 from '@/components/training/Btn64.vue'
const aimAtBtn = ['随机', '未做', '错题', '收藏']
const aimAtActiveBtn = ref(0)
const diffBtn = ['全部', '单选题', '多选题', '收藏']
const diffActiveBtn = ref(0)
const countBtn = ['5题', '10题', '20题', '50题']
const countActiveBtn = ref(0)
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const setActiveButton1 = (index) => {
  aimAtActiveBtn.value = index
}
const setActiveButton2 = (index) => {
  diffActiveBtn.value = index
}
const setActiveButton3 = (index) => {
  countActiveBtn.value = index
}
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="IENav"
    title="强化练习"
  ></van-nav-bar>
  <div class="IEContainer">
    <div class="subject">
      <div class="text">科目</div>
      <select class="subSelect" name="subject" id="subject">
        <option value="初级会计实务">初级会计实务</option>
        <option value="初级会计实务">初级会计实务</option>
        <option value="初级会计实务">初级会计实务</option>
      </select>
    </div>
    <div class="aimAtExercise">
      <div class="text">针对练习</div>
      <div class="sel">
        <Btn64
          :message="aimAtBtn[0]"
          :bgc="aimAtActiveBtn === 0 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton1(0)"
        ></Btn64>
        <Btn64
          :message="aimAtBtn[1]"
          :bgc="aimAtActiveBtn === 1 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton1(1)"
        ></Btn64>
        <Btn64
          :message="aimAtBtn[2]"
          :bgc="aimAtActiveBtn === 2 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton1(2)"
        ></Btn64>
        <Btn64
          :message="aimAtBtn[3]"
          :bgc="aimAtActiveBtn === 3 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton1(3)"
        ></Btn64>
      </div>
    </div>
    <div class="topicDifficulty">
      <div class="text">题目难度</div>
      <div class="sel">
        <Btn64
          :message="diffBtn[0]"
          :bgc="diffActiveBtn === 0 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton2(0)"
        ></Btn64>
        <Btn64
          :message="diffBtn[1]"
          :bgc="diffActiveBtn === 1 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton2(1)"
        ></Btn64>
        <Btn64
          :message="diffBtn[2]"
          :bgc="diffActiveBtn === 2 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton2(2)"
        ></Btn64>
        <Btn64
          :message="diffBtn[3]"
          :bgc="diffActiveBtn === 3 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton2(3)"
        ></Btn64>
      </div>
    </div>
    <div class="topicCount">
      <div class="text">题目数量</div>
      <div class="sel">
        <Btn64
          :message="countBtn[0]"
          :bgc="countActiveBtn === 0 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton3(0)"
        ></Btn64>
        <Btn64
          :message="countBtn[1]"
          :bgc="countActiveBtn === 1 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton3(1)"
        ></Btn64>
        <Btn64
          :message="countBtn[2]"
          :bgc="countActiveBtn === 2 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton3(2)"
        ></Btn64>
        <Btn64
          :message="countBtn[3]"
          :bgc="countActiveBtn === 3 ? '#11D075' : '#F6F6F6'"
          @click="setActiveButton3(3)"
        ></Btn64>
      </div>
    </div>
  </div>

  <BtnGreen
    message="开始出题"
    style="margin-top: 17px; margin-left: 14px"
    @click="router.push('/topicPage')"
  ></BtnGreen>
</template>

<style scoped>
.IEContainer {
  background-color: #fff;
  border-radius: 5px;
  height: 520px;
  margin: 11px 14px 0 14px;
  padding: 8px 13px;
  .subSelect {
    background-color: #f6f6f6;
    color: #292929;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 121px;
    height: 30px;
    border-radius: 5px;
  }
  .text {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .sel {
    display: flex;
  }
}
</style>
