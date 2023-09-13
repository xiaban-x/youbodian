<template>
  <div class="head">
    <div class="head-left">
      <img src="@/assets/iamges/return.jpg" alt="" @click="goBack"/>
    </div>
    <div class="head-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  padding: 21px 10px 10px 14px;
  text-align: center;
  overflow: hidden;
  background-color: white;
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
