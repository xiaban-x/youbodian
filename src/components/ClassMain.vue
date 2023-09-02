<template>
  <div class="class-main" >
    <img class="image" src="src\assets\iamges\recommended-course-image.jpg" />
    <div class="title-small">高分一点通</div>
    <div class="main-text">集中突破，冲刺高分</div>
    <div class="buy">
      <div class="price">￥400</div>
      <div class="buyers">271人购买</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.class-main {
  margin-right: 13px; 
  width: 167px;
  height: 230px;
  background: white;
  border-radius: 10px;
  float: left;
  margin-bottom: 14px;
}

.class-main .image {
  display: block;
  width: 167px;
  height: 128px;
  /* background: linear-gradient(0deg, #962a2a 0%, #962a2a 100%); */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.class-main .title-small {
  color: #292929;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 9px 0 0 14px;
}

.class-main .main-text {
  color: #666;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 5px 0 0 14px;
}

.class-main .buy {
  margin-top: 16px;
}

.class-main .price {
  color: #ff5c5c;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  margin-left: 14px;
  float: left;
}
.class-main .buyers {
  color: #999;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 13px;
  float: right;
}
</style>