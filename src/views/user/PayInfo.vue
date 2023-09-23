<script setup>
import router from '@/router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="PINav"
    title="付款内容"
    style="margin-bottom: 19px"
  ></van-nav-bar>
  <van-cell-group inset>
    <van-field
      v-model="value1"
      label="付款人姓名"
      required
      placeholder="请输入姓名"
      label-align="top"
      right-icon="arrow"
    /><van-field
      v-model="value2"
      label="付款卡号"
      required
      placeholder="请输入卡号"
      label-align="top"
      right-icon="arrow"
    /><van-field
      v-model="value3"
      label="付款日期"
      required
      placeholder="请选择日期"
      label-align="top"
    >
      <template #button>
        <van-icon @click="router.push('/')" name="arrow"></van-icon>
      </template>
    </van-field>
    <van-field
      v-model="value4"
      label="支付截图"
      required
      placeholder="请提供支付截图"
      label-align="top"
    >
      <template #extra>
        <span
          style="
            width: 25px;
            height: 25px;
            background-color: #d9d9d9;
            border-radius: 3px;
            margin-top: -4px;
          "
        ></span
        ><span
          style="
            width: 25px;
            height: 25px;
            background-color: #d9d9d9;
            border-radius: 3px;
            margin-top: -4px;
            margin-left: 5px;
          "
        ></span>
        <van-icon @click="router.push('/')" name="arrow"></van-icon>
      </template>
    </van-field>
    <van-field
      v-model="value5"
      label="备注"
      placeholder="选择填写备注"
      label-align="top"
      right-icon="arrow"
    />
  </van-cell-group>
  <BtnGreen
    message="提交"
    style="margin-left: 14px; margin-top: 170px; margin-bottom: 30px"
    @click="router.push('/buySetMeal')"
  ></BtnGreen>
</template>

<style scoped></style>
