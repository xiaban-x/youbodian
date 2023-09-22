<script setup>
import router from '@/router'
import ApplyDetailSection from '@/components/user/ApplyDetailSection.vue'
</script>
<template>
  <div class="top">
    <div class="EPNav">
      <span style="width: 14px; height: 14px" @click="router.go(-1)">&lt;</span>
      <span class="myApply">我的报名</span>
    </div>
    <img
      src="@/assets/user/ApplyBackGround.png"
      class="applyPic"
      alt="报名背景图片"
    />
  </div>
  <div class="ADContainer">
    <div class="title">快速提升会计基础班</div>
    <ApplyDetailSection left="课程类型" right="线下课程"> </ApplyDetailSection>
    <ApplyDetailSection left="姓名" right="夏木"> </ApplyDetailSection>
    <ApplyDetailSection left="联系方式" right="没有"> </ApplyDetailSection>
    <ApplyDetailSection left="备注" right="无"> </ApplyDetailSection>
    <ApplyDetailSection left="报名时间" right="2022.07.10 10:23">
    </ApplyDetailSection>
  </div>
</template>

<style scoped>
.top {
  background: linear-gradient(180deg, #daffed 90%, #fff 100%);
  height: 152px;
  padding-top: 20px;
  .EPNav {
    margin-left: 14px;
    display: flex;
    align-items: center;
    .myApply {
      width: 319px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .applyPic {
    width: 109px;
    height: 99px;
    margin-top: 36px;
    margin-left: 225px;
  }
}
.ADContainer {
  padding: 20px 15px 200px 16px;
  background-color: #fff;
  border-radius: 20px;
  .title {
    color: #11d075;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 19px;
  }
}
</style>
