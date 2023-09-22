<template>
  <div class="chapterLink">
    <div class="RLCLContainer">
      <div class="chapterNum">
        <!-- 第几章 -->
        第
        <slot name="chapterNum"></slot>
        章&nbsp;
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
        练习<slot name="exerciseCount"></slot>题目
      </div>
      <span class="text">得分率</span>
      <div class="scoreRate">
        <!-- 得分率插槽 -->
        <slot name="scoreRate"></slot>%
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapterLink {
  width: 347px;
  padding: 10px 0 14px 13px;
  margin: 10.5px 14px;
  background-color: #fff;

  .RLCLContainer {
    display: flex;
    .chapterNum {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .title {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .exerciseCount {
      padding: 0 22px 0 14px;
      font-size: 11px;
    }
    .text {
      font-size: 12px;
    }
    .scoreRate {
      color: #11d075;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
}
</style>
<script setup></script>
