<script setup>
import { useRouter } from 'vue-router'
import CorrectNumber from '@/components/dictionary/CorrectNumber.vue'
import SelectAnswer from '@/components/dictionary/SelectAnswer.vue'
import Pix40GrayBtn from '@/components/dictionary/Pix40GrayBtn.vue'
const router = useRouter()
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="NWNav"
    title="XXX生词本"
  ></van-nav-bar>
  <div class="NWContainer">
    <div class="groupLearning">本组学习 &nbsp;0/20</div>
    <div class="word">n.字典，词典；专业词典，术语大全；电子词</div>
    <div class="line"></div>
    <div class="cent">
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
    </div>
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      Perpare</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      Perpare</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      Perpare</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      Perpare</SelectAnswer
    >
    <div class="bottom">
      <Pix40GrayBtn> 不再出现 </Pix40GrayBtn>
      <Pix40GrayBtn @click="router.push('/learnWordExplained')">
        查看答案
      </Pix40GrayBtn>
    </div>
  </div>
</template>

<style scoped>
.NWContainer {
  padding: 22px 14px 55px 14px;
  .groupLearning {
    color: #999;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .word {
    color: #292929;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    margin-bottom: 17px;
  }
  .line {
    width: 347px;
    border: 1px #dadada solid;
    margin-bottom: 17px;
  }
  .cent {
    margin-bottom: 186px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .selAnswer {
    margin-top: 10px;
  }
  .bottom {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
