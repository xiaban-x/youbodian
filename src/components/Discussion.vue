<template>
  <div class="evaluate">
    <div class="head-picture">
      <img src="src/assets/iamges/my-class.jpg" alt="" />
    </div>
    <div class="content">
      <div class="nickname-and-star">
        <div class="nickname">全球通学员1234</div>
        <div class="star">
          <img src="src/assets/iamges/good1.png" alt="" />
          <img src="src/assets/iamges/good1.png" alt="" />
          <img src="src/assets/iamges/good1.png" alt="" />
          <img src="src/assets/iamges/good1.png" alt="" />
          <img src="src/assets/iamges/good1.png" alt="" />
        </div>
      </div>
      <div class="text">违背了会计政策，违背了会计政策</div>
      <div class="time">2022-07-03 23:22</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.evaluate {
  overflow: hidden;
  margin-top: 13px;
}
.evaluate .head-picture {
  border-radius: 50%;
  height: 36px;
  width: 36px;
  margin: 5px 0 0 14px;
  float: left;
}
.evaluate .head-picture img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.evaluate .content {
  float: left;
  margin-left: 14px;
  width: 275px;
}
.evaluate .content .nickname-and-star {
  overflow: hidden;
}
.evaluate .content .nickname-and-star .nickname {
  color: #666666;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 5px;
  float: left;
}
.evaluate .content .nickname-and-star .star {
  color: #666666;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  float: right;
  margin-top: 4px;
}
.evaluate .content .text {
  color: #020202;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 3px;
}
.evaluate .content .time {
  color: #666666;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 3px;
}
</style>
