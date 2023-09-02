<script>
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<template>
  <div>
    <!-- <div>这是课程</div> -->

  <!-- 头部 -->
  <div class="head">
    <div class="head-left">会计</div>
    <div class="head-right"><img src="src\assets\smallIcon\head-right.png" alt="" /></div>
  </div>
  <img class="head-image" src="src\assets\iamges\score-head.jpg" />

  <!-- 推荐课程 -->
  <div class="recommended-course">
    <div class="recommended-course-title">推荐课程</div>
    <div class="recommended-course-more">查看更多></div>
  </div>
  <div class="recommended-course-main">
    <ClassMain></ClassMain>
    <ClassMain></ClassMain>
  </div>

  <!-- 我的课程 -->
  <van-tabs
  shrink
    v-model:active="active"
    class="order-tabs"
    line-height="2px"
    line-width="42px"
    color="#11D075"
    background="transparent"
  >
    <van-tab title="我的课程" >
      <div class="my-class-all">
        <MyClass></MyClass>
        <MyClass></MyClass>
        <MyClass></MyClass>
        <div style="height: 15px"></div>
      </div>
    </van-tab>
    <van-tab title="招生报名" >
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
.head {
  margin-left: 14px;
  overflow: hidden;
}
.head-left {
  color: #151515;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  float: left;
}

.head-right {
  width: 16px;
  height: 12px;
  margin-right: 15px;
  float: right;
}

.head-image {
  display: block;
  width: 347px;
  height: 150px;
  background: linear-gradient(0deg, white 0%, white 100%);
  border-radius: 10px;
  margin: 28px 13px 0 15px;
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




<style>

</style>

