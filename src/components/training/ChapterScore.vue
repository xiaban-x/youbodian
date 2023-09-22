<template>
  <div class="chapterLink">
    <div class="left">
      <div class="CSContainer">
        <div class="chapterNum">
          <!-- 第几章 -->
          第<slot name="chapterNum"></slot>章&nbsp;
        </div>
        <div class="title">
          <!-- 章节标题插槽 -->
          <slot name="title"></slot>
        </div>
      </div>
      <div class="bottom">
        <div class="time">
          <!-- 完成时间插槽 -->
          <slot name="time"></slot>
        </div>
        <div class="exerciseCount">
          <!-- 练习多少题插槽 -->
          <slot name="exerciseCount"></slot>
        </div>
      </div>
    </div>
    <div class="scoreRate">
      <div class="circle">
        <!-- 得分率图形插槽 -->
        <slot name="circle"></slot>
      </div>
      <div class="textCon">
        <div class="numCon">
          <div class="num">
            <!-- 得分率数字插槽 -->
            <slot name="num"></slot>
          </div>
          <div class="rate">
            <!-- 分或者率插槽 -->
            <slot name="rate"></slot>
          </div>
        </div>

        <div class="text">
          <!-- 得分率文字插槽 -->
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapterLink {
  width: 347px;
  padding: 10px 0 14px 13px;
  margin: 10.5px 14px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .CSContainer {
    display: flex;
    .chapterNum {
      color: #292929;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .title {
      color: #292929;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
    line-height: normal;
    .exerciseCount {
      padding: 0 22px 2px 14px;
    }
  }
  .scoreRate {
    color: #11d075;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    height: 65px;
    padding-right: 30px;
    .textCon {
      right: -18px;
      bottom: 60px;
      position: relative;
      .numCon {
        align-items: flex-end;
        display: flex;
        .rate {
          color: #11d075;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .text {
        color: #999;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
</style>
<script setup></script>
