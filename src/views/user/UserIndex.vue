<template>
  <!-- <div>这是我的资料</div> -->
  <div>
    <div class="Clickloging">
      <div class="Headpicture"><img src="src\assets\iamges\无头像 1.png" alt="" /></div>
      <div class="name">请点击登录</div>
      <div class="lookmore">&gt;</div>
    </div>
    <div class="message">
      <div class="box">
        <img src="src\assets\iamges\会员注册 1.png" alt="" />
        <div class="text">个人信息</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\日志记录 1.png" alt="" />
        <div class="text">意见反馈</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\行为分析 1.png" alt="" />
        <div class="text">系统设置</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\会员录入 1.png" alt="" />
        <div class="text">邀请注册</div>
      </div>
    </div>

    <!-- 商城 -->
    <div class="title">商城</div>
    <div class="market">
      <div class="box">
        <img src="src\assets\iamges\公文包.png" alt="" />
        <div class="text">我的钱包</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\金融.png" alt="" />
        <div class="text">购买套餐</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\发布.png" alt="" />
        <div class="text">我的订单</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\考试.png" alt="" />
        <div class="text">我的分销</div>
      </div>
      <div class="box">
        <img src="src\assets\iamges\认证.png" alt="" />
        <div class="text">我的报名</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.Clickloging {
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
}
.Clickloging .Headpicture {
  width: 55px;
  height: 55px;
  background: #11d075;
  border-radius: 50%;
  margin-left: 15px;
  float: left;
}
.Clickloging .Headpicture img {
  margin: 15px;
}
.Clickloging .name {
  display: block;
  color: #292929;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  float: left;
  line-height: 55px;
  margin-left: 9px;
}
.Clickloging .lookmore {
  display: block;
  color: #292929;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  float: right;
  margin-right: 15px;
  line-height: 55px;
}
.message {
  width: 347px;
  height: 119px;
  background: white;
  border-radius: 10px;
  margin: 26px 0 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 3px;
}
.message .box {
  width: calc(25% - 28px);
  margin: 14px;
  height: 100px;
  /* background-color: #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.message .box .text {
  color: #292929;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 14px;
}
.title {
  color: #292929;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  word-wrap: break-word;
  margin: 17px 0 0 14px;
}
.market {
  width: 347px;
  height: 154px;
  background: white;
  border-radius: 10px;
  margin: 8px 0 0 16px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  padding: 17px 1px;
}
.market .box {
  width: calc(25% - 30px);
  margin: 0 15px;
  height: 50%;
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 11px;
  box-sizing: border-box;
}
.market .box .text {
  color: #292929;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
