<template>
  <div class="DSContainer">
    <div class="top">
      <div class="title">
        <!-- 标题插槽 -->
        <slot name="title"></slot>
      </div>
      <div class="source">
        <!-- 来源插槽 -->
        <slot name="source"></slot>
      </div>
    </div>

    <div class="bottom">
      <div class="time">
        <!-- 完成时间插槽 -->
        <slot name="time"></slot>
      </div>
      <div class="money">
        <!-- 金额插槽 -->
        + <slot name="money"></slot>
      </div>
    </div>
  </div>
  <div class="longLine"></div>
</template>

<style scoped>
.DSContainer {
  width: 347px;
  padding: 10px 14px 14px 13px;
  border-radius: 5px;
  background-color: #fff;

  .top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .title {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .source {
      color: #222;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    margin-top: 7px;
    line-height: normal;
    .money {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
.longLine {
  width: 316px;
  border: 1px #e7e7e7 solid;
  margin-left: 17px;
}
</style>
<script setup></script>
