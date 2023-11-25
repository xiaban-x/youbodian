<script setup>
import { useRouter } from 'vue-router'
import WordPronunciation from '@/components/dictionary/WordPronunciation.vue'
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
    class="LGPNav"
    title="XXX生词本"
  ></van-nav-bar>
  <div class="LGPContainer">
    <div class="groupLearning">本组学习 &nbsp;0/20</div>
    <div class="word">dictionary</div>
    <div class="line"></div>
    <div class="cent">
      <WordPronunciation class="SBTDPro">
        <template #header>英</template>
        <template #main>/ ˈdɪkʃən(ə)ri /</template>
      </WordPronunciation>
      <WordPronunciation class="SBTDPro">
        <template #header>美</template>
        <template #main>/ ˈdɪkʃən(ə)ri /</template>
      </WordPronunciation>
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
      adi.突然的，意外的;唐突的，鲁莽的</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      adi.突然的，意外的;唐突的，鲁莽的</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      adi.突然的，意外的;唐突的，鲁莽的</SelectAnswer
    >
    <SelectAnswer class="selAnswer" @click="router.push('/learnWordExplained')">
      adi.突然的，意外的;唐突的，鲁莽的</SelectAnswer
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
.LGPContainer {
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
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 14px;
    margin-bottom: 17px;
  }
  .line {
    width: 347px;
    border: 1px #dadada solid;
    margin-bottom: 16px;
  }
  .cent {
    margin-bottom: 86px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .SBTDPro {
      margin-bottom: 14px;
    }
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
