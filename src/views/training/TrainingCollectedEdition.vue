<template>
  <van-nav-bar title="收藏本" left-arrow @click-left="router.go(-1)" />
  <div class="TCEContainer">
    <van-tabs v-model:active="active" color="#11D075" line-height="5px">
      <van-tab title="速记刷题">
        <div class="con">
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <div class="longLine"></div>
        </div>
      </van-tab>
      <van-tab title="章节练习">
        <div class="con">
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <div class="longLine"></div>
        </div>
      </van-tab>
      <van-tab title="历年真题">
        <div class="con">
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <ChapterLink>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #count>3</template>
          </ChapterLink>
          <div class="longLine"></div>
        </div>
      </van-tab>
      <van-tab title="强化练习">
        <div class="forth">
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
          <ReinforceLearningChapter>
            <template #chapterNum>一</template>
            <template #title>总论</template>
            <template #time>2022.07.10 14:23</template>
            <template #exerciseCount>8</template>
            <template #scoreRate>70</template>
          </ReinforceLearningChapter>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'
import ChapterLink from '@/components/training/ChapterLink.vue'
import ReinforceLearningChapter from '@/components/training/ReinforceLearningChapter.vue'
const active = ref(0)
</script>

<style scoped>
.TCEContainer {
  height: 670px;
  padding-bottom: 60px;
  .longLine {
    border: 1px #c7c7c7 solid;
  }
  .forth {
    background-color: rgb(248, 248, 248);
    width: 375px;
  }
  .con {
    padding-top: 10px;
    background-color: #fff;
  }
}
</style>
