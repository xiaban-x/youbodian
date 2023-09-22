<script setup>
import router from '@/router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const checked = ref('')
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="CANav"
    title="注销帐号"
  ></van-nav-bar>
  <div class="CAContainer">
    <div class="image">
      <img
        src="@/assets/user/ExclamationPoint.png"
        style="width: 50px; height: 50px"
        alt="感叹号"
      />
    </div>
    <div class="info">尊敬的学员，注销账号是不可恢复的操作，请谨慎操作!</div>
    <div class="riskRegulation">
      <div class="warn">
        账号注销有风险，我们希望你在注销账号之前仔细 阅读以下内容:
      </div>
      <div class="title">1.无法登录</div>
      <div class="content">一旦注销，你将无法使用该账号登录全球通APP。</div>
      <div class="title">2.信息抹除，无法恢复</div>
      <div class="content">
        账号注销后将永久解除全球通APP的所有信息，包
        括但不限于已购的课程、词典记录、题库记录等内 容。
      </div>
      <div class="title">3.相关的服务权限将停止</div>
      <div class="content">
        如果你是购买过单词本或课程的学员，注销账号后，
        将不能使用相关的服务权益。
      </div>
    </div>

    <div class="agree">
      <van-checkbox v-model="checked" checked-color="#11D075"
        >我已清楚风险，确定继续申请注销账号</van-checkbox
      >
    </div>
    <BtnGreen message="确认注销"></BtnGreen>
  </div>
</template>

<style scoped>
.CAContainer {
  padding: 25px 14px;
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
    margin-top: 11px;
    margin-bottom: 22px;
  }
  .riskRegulation {
    padding: 17px 21px 22px 18px;
    margin-bottom: 17px;
    background-color: #fff;
    .warn {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      word-wrap: break-word;
    }
    .title {
      margin-top: 8px;
      color: #292929;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      word-wrap: break-word;
    }
    .content {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      word-wrap: break-word;
    }
  }
  .agree {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    word-wrap: break-word;
    margin-bottom: 100px;
  }
}
</style>
