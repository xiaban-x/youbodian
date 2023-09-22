<template>
  <div class="RWSContainer">
    <div class="top">
      <div class="title">
        <!-- 标题插槽 -->
        <slot name="title"></slot>
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
  </div>
</template>

<style scoped>
.RWSContainer {
  width: 347px;
  padding: 10px 14px 14px 13px;
  background-color: #fff;

  .top {
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
    align-items: flex-end;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    .money {
      color: #ff5c5c;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .longLine {
    width: 316px;
    border: 1px #e7e7e7 solid;
    margin-top: 7px;
  }
}
</style>
<script setup></script>
