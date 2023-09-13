<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)
</script>

<template>
  <div>
    <!-- <div>这是课程</div> -->
    <div class="bgcGreen">
      <div class="top">
        <div class="left">会计</div>
        <div class="right">
          <img src="@/assets/dictionary/SelectProfession.svg" alt="行业" />
        </div>
      </div>
    </div>
    <!-- 头部 -->

    <img class="head-image" src="@/assets/iamges/score-head.jpg" />

    <!-- 推荐课程 -->
    <div class="recommended-course">
      <div class="recommended-course-title">推荐课程</div>
      <bottom class="recommended-course-more" @click="router.push('moreCourse')">查看更多></bottom>
    </div>
    <div class="recommended-course-main">
      <ClassMain @click="router.push('highCourse')"></ClassMain>
      <ClassMain @click="router.push('highCourse')"></ClassMain>
    </div>

    <!-- 我的课程 -->
    <van-tabs
      v-model:active="active"
      class="order-tabs"
      line-height="2px"
      line-width="42px"
      color="#11D075"
      background="transparent"
      shrink
    >
      <van-tab title="我的课程" class="myClassTitle">
        <div class="my-class-all">
          <MyClass></MyClass>
          <MyClass></MyClass>
          <MyClass></MyClass>
          <MyClass></MyClass>
          <div style="height: 15px"></div>
        </div>
      </van-tab>
      <van-tab title="招生报名">
        <div class="my-class-all">
          <MyClass></MyClass>
          <div style="height: 15px"></div>
        </div>
      </van-tab>
    </van-tabs>
    <div style="height: 70px"></div>
  </div>
</template>

<style scoped>
.bgcGreen {
  background: linear-gradient(to bottom, #c3feda, #ffffff);
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-right: 16px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 27px;
    margin-top: 23px;
  }

  .left {
    flex: 1;
    color: #151515;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }

  .right {
    margin-left: 10px; /* 调整右侧图片与文字的间距 */
  }
}

.head-image {
  display: block;
  width: 347px;
  height: 150px;
  background: linear-gradient(0deg, white 0%, white 100%);
  border-radius: 10px;
  margin: 3px 13px 0 15px;
}

/* 推荐课程 */
.recommended-course {
  margin-left: 14px;
  margin-top: 20px;
  overflow: hidden;
}

.recommended-course .recommended-course-title {
  color: #292929;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  word-wrap: break-word;
  float: left;
}

.recommended-course .recommended-course-more {
  color: #666666;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin-right: 15px;
  float: right;
}

.recommended-course-main {
  overflow: hidden;
  margin-top: 8px;
  margin-left: 14px;
}

/* tab */
/* 我的课程 */
.my-class-all {
  width: 347px;
  /* height: 324px; */
  background: white;
  border-radius: 10px;
  margin-top: 9px;
  margin-left: 14px;
}
</style>

<style lang="less">
.order-tabs .van-tab {
  color: #666;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 21px;
}
.order-tabs .van-tab--active {
  color: #292929;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 19px 0 6px 0;
}
</style>

<!-- 线上课程页 -->

<style></style>
