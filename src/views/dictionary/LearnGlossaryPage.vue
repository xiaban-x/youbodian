<script setup>
import { useRouter } from 'vue-router'
import WordPronunciation from '@/components/dictionary/WordPronunciation.vue'
import CorrectNumber from '@/components/dictionary/CorrectNumber.vue'
const router = useRouter()
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="EGNav"
    title="XXX生词本"
  ></van-nav-bar>
  <div class="container">
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
  </div>
</template>

<style scoped>
.EGNav {
  background-color: rgb(248, 248, 248);
}
</style>
