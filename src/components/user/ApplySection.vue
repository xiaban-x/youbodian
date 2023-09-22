<template>
  <div class="RWSContainer">
    <div class="top">
      <div class="title">
        <!-- 标题插槽 -->
        <slot name="title"></slot>
      </div>
      <div class="teachClass">
        <!-- 授课方式插槽 -->
        <slot name="teachClass"></slot>
      </div>
    </div>
    <div class="bottom">
      <div class="time">
        <!-- 完成时间插槽 -->
        报名时间：<slot name="time"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.RWSContainer {
  width: 347px;
  padding: 11px 12px 18px 11px;
  margin-bottom: 8px;
  background-color: #fff;

  .top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .title {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .teachClass {
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 3px;
      background: #11d075;
      width: 69px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .bottom {
    margin-top: 5px;
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
}
</style>
<script setup></script>
