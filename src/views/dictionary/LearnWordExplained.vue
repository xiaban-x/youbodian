<script setup>
import { useRouter } from 'vue-router'
import WordPronunciation from '@/components/dictionary/WordPronunciation.vue'
import CorrectNumber from '@/components/dictionary/CorrectNumber.vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
import BtnGreen from '@/components/BtnGreen.vue'
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
    <div>中文释义</div>
    <div class="chineseTrans">n. 字典，词典；专业词典；术语大全...</div>
    <div class="longDotted"></div>
    <div class="paragraphTitle">双语例句</div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <div class="longDotted"></div>
    <div class="moreExplain" @click="router.push('/searchByTransDetail')">
      查看详细释义 &nbsp; >
    </div>
    <BtnGreen
      message="下个单词"
      style="margin-top: 14px"
      @click="router.push('/nextWord')"
    ></BtnGreen>
  </div>
</template>

<style scoped>
.LWEContainer {
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
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .SBTDPro {
      margin-bottom: 14px;
    }
  }
  .chineseTrans {
    color: #292929;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 6px;
  }
  .longDotted {
    border: 1px #c3c3c3 dashed;
    width: 347px;
    margin: 14px 0;
  }
  .BEx {
    margin-bottom: 13px;
  }
  .paragraphTitle {
    margin-bottom: 14px;
  }
  .moreExplain {
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
