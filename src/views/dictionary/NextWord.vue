<script setup>
import { useRouter } from 'vue-router'
import CorrectNumber from '@/components/dictionary/CorrectNumber.vue'
import SelectAnswer from '@/components/dictionary/SelectAnswer.vue'
import Pix40GrayBtn from '@/components/dictionary/Pix40GrayBtn.vue'
const router = useRouter()
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="EGNav"
    title="XXX生词本"
  ></van-nav-bar>
  <div class="LWEContainer">
    <div class="groupLearning">本组学习 &nbsp;0/20</div>
    <div class="word">dictionary</div>
    <div class="line"></div>
    <CorrectNumber>
      <template v-slot:go1>
        <!-- 放入图片或其他内容 -->
        <img src="@/assets/dictionary/goGreen.svg" alt="绿色的勾" />
      </template>
      <template v-slot:go2>
        <!-- 放入图片或其他内容 -->
        <img src="@/assets/dictionary/goWhite.svg" alt="白色的勾" />
      </template>
      <template v-slot:CNText>
        <!-- 放入文字内容 -->
        <span>连续答对1次</span>
      </template>
    </CorrectNumber>

    <SelectAnswer @click="router.push('/learnWordExplained')">
      Perpare
    </SelectAnswer>
    <SelectAnswer @click="router.push('/learnWordExplained')">
      Perpare
    </SelectAnswer>
    <SelectAnswer @click="router.push('/learnWordExplained')">
      Perpare
    </SelectAnswer>
    <SelectAnswer @click="router.push('/learnWordExplained')">
      Perpare
    </SelectAnswer>
    <Pix40GrayBtn> 不再出现 </Pix40GrayBtn>
    <Pix40GrayBtn @click="router.push('/learnWordExplained')">
      查看答案
    </Pix40GrayBtn>
  </div>
</template>

<style scoped></style>
