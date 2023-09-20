<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <!-- <div>这是我的资料</div> -->
  <div class="container">
    <div class="clickLog">
      <div class="headPicture">
        <img src="@/assets/images/NotAvatar.png" alt="" />
      </div>
      <button class="name" @click="router.push('login')">请点击登录</button>
      <div class="lookMore">&gt;</div>
    </div>
    <div class="message" >
      <div class="box" @click="router.push('personalInformation')">
        <img
          src="@/assets/images/MemberRegister.png"
          style="height: 41px; width: 41px"
          alt=""
        />
        <div class="text">个人信息</div>
      </div>
      <div class="box">
        <img
          src="@/assets/images/logging.png"
          style="height: 41px; width: 41px"
          alt=""
        />
        <div class="text">意见反馈</div>
      </div>
      <div class="box" @click="router.push('systemSetting')">
        <img
          src="@/assets/images/behaviorAnalysis.png"
          style="height: 41px; width: 41px"
          alt=""
        />
        <div class="text">系统设置</div>
      </div>
      <div class="box" @click="router.push('invitationRegister')">
        <img
          src="@/assets/images/memberEntry.png"
          style="height: 41px; width: 41px"
          alt=""
        />
        <div class="text" >邀请注册</div>
      </div>
    </div>

    <!-- 商城 -->
    <div class="title">商城</div>
    <div class="market">
      <div class="box">
        <img
          src="@/assets/images/BriefCase.png"
          style="width: 30px; height: 30px"
          alt=""
        />
        <div class="text">我的钱包</div>
      </div>
      <div class="box">
        <img
          src="@/assets/images/finance.png"
          style="width: 30px; height: 30px"
          alt=""
        />
        <div class="text">购买套餐</div>
      </div>
      <div class="box">
        <img
          src="@/assets/images/publish.png"
          style="width: 30px; height: 30px"
          alt=""
        />
        <div class="text">我的订单</div>
      </div>
      <div class="box">
        <img
          src="@/assets/images/exam.png"
          style="width: 30px; height: 30px"
          alt=""
        />
        <div class="text">我的分销</div>
      </div>
      <div class="box">
        <img
          src="@/assets/images/Certification.png"
          style="width: 30px; height: 30px"
          alt=""
        />
        <div class="text">我的报名</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}
.clickLog {
  background: linear-gradient(to bottom, #c3feda, #ffffff);
  width: 100%;
  padding-top: 64px;
  padding-bottom: 10px;
  overflow: hidden;
}
.clickLog .headPicture {
  width: 55px;
  height: 55px;
  background: #11d075;
  border-radius: 50%;
  margin-left: 15px;
  float: left;
}
.clickLog .headPicture img {
  margin: 15px;
}
.clickLog .name {
  display: block;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
  float: left;
  line-height: 55px;
  margin-left: 9px;
  background: none; /* 移除背景色 */
  border: none; /* 移除边框 */
  padding: 0; /* 移除内边距 */
}
.clickLog .lookMore {
  display: block;
  color: #292929;
  font-size: 16px;

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

  font-weight: 400;
  word-wrap: break-word;
  margin-top: 14px;
}
.title {
  color: #292929;
  font-size: 16px;

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

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
