<template>
  <div class="head">
    <div class="head-left">
      <img src="src/assets/iamges/return.jpg" alt="" />
    </div>
    <div class="head-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.head {
  margin-left: 14px;
  margin-right: 10px;
  text-align: center;
  overflow: hidden;
}
.head-left {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-left: -4px;
  line-height: normal;
  padding-top: 4px;
  float: left;
}

.head-right {
  display: inline-block;
  text-align: center;
  color: #292929;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 auto;
}
</style>
