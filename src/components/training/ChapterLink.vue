<template>
  <div class="chapterLink">
    <div class="longLine"></div>
    <div class="chapterBox">
      <div class="CLContainer">
        <div class="chapterNum">
          <!-- 第几章 -->
          第<slot name="chapterNum"></slot>章&nbsp;
        </div>
        <div class="title">
          <!-- 章节标题插槽 -->
          <slot name="title"></slot>
        </div>
      </div>
      <div class="count">
        <!-- 题目数量插槽 -->
        <slot name="count"></slot>题目 &gt;
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapterLink {
  .longLine {
    border: 1px #c7c7c7 solid;
  }
  .chapterBox {
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    background-color: #fff;
  }
  .CLContainer {
    display: flex;
  }
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
  .count {
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
<script setup></script>
