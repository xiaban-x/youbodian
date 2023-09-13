<template>
  <div class="my-class">
    <img class="my-class-image" src="@/assets/iamges/my-class.jpg" />
    <div class="my-class-container">
      <div class="my-class-title">会计基础班</div>
      <div class="my-class-text">0基础门槛，帮助小白快速上手</div>
      <div class="my-class-price">￥400</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.my-class {
  display: flex;
  .my-class-container {
    display: flex;
    flex-direction: column;
  }
}
.my-class .my-class-image {
  width: 79px;
  height: 91px;
  background: linear-gradient(0deg, #e0f8ec 0%, #e0f8ec 100%);
  border-radius: 5px;
  margin: 12px 11px 0 12px;
}

.my-class .my-class-title {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  padding-top: 12px;
}

.my-class .my-class-text {
  color: #7c7c7c;
  font-size: 12px;
  font-weight: 300;
  word-wrap: break-word;
  margin-top: 4px;
}

.my-class .my-class-price {
  color: #ff5c5c;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 30px;
}
</style>
