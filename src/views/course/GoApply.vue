<script setup>
import router from '@/router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="GANav"
    title="线下课程报名"
    style="margin-bottom: 19px"
  ></van-nav-bar>
  <div class="image">
    <img
      src="@/assets/training/Logo.png"
      style="width: 86px; height: 57px"
      alt="logo"
    />
  </div>
  <van-cell-group inset>
    <van-field
      v-model="value1"
      label="课程名称"
      required
      placeholder="会计基础班级"
      label-align="top"
      right-icon="arrow"
    >
    </van-field>
    <van-field
      v-model="value2"
      label="姓名"
      required
      placeholder="请输入姓名"
      label-align="top"
      right-icon="arrow"
    /><van-field
      v-model="value3"
      label="联系方式"
      required
      right-icon="arrow"
      placeholder="请输入联系电话"
      label-align="top"
    >
    </van-field>
    <van-field
      v-model="value4"
      label="备注"
      placeholder="选择填写备注"
      label-align="top"
      right-icon="arrow"
    />
  </van-cell-group>
  <BtnGreen
    message="提交"
    style="margin-left: 14px; margin-top: 100px; margin-bottom: 30px"
    @click="router.go(-1)"
  ></BtnGreen>
</template>

<style scoped>
.image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 59px;
}
</style>
