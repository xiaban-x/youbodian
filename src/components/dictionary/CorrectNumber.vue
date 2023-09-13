<template>
  <div class="CNContainer">
    <div class="go1">
      <slot name="go1"> </slot>
    </div>
    <div class="go2">
      <slot name="go2"></slot>
    </div>
    <div class="CNText">
      <slot name="CNText"></slot>
    </div>
  </div>
</template>

<style scoped>
.CNContainer {
  display: flex;
  border-radius: 20px;
  background: #f0f0f0;
  width: 146px;
  height: 25px;
  .go1 {
    margin-left: 15px;
    margin-top: 6px;
  }
  .go2 {
    margin-top: 6px;
  }
  .CNText {
    margin-left: 8.5px;
    margin-right: 11px;
    margin-top: 6px;
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
<script setup></script>
