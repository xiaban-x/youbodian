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
    <div class="moreExplain">查看详细释义 &nbsp; ></div>
    <BtnGreen message="下个单词" @click="router.push('/nextWord')"></BtnGreen>
  </div>
</template>

<style scoped></style>
