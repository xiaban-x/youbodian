<script setup>
import router from '@/router'
import { ref } from 'vue'
import OverYearsChapter from '@/components/training/OverYearsChapter.vue'
const activeNames = ref(['0'])
</script>
<template>
  <van-nav-bar title="历年真题" left-arrow @click-left="router.go(-1)" />
  <van-collapse v-model="activeNames">
    <van-collapse-item title="初级会计实务" name="1">
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        >
        </OverYearsChapter>
      </div>

      <div class="longLine"></div>
    </van-collapse-item>
    <van-collapse-item title="经济基础法" name="2">
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div @click="router.push('/preTestNotice')">
        <OverYearsChapter
          title="2022年真题卷"
          score="总分：100分"
          count="总题数：29题"
          text="开始考试"
        ></OverYearsChapter>
      </div>
      <div class="longLine"></div>
    </van-collapse-item>
  </van-collapse>
</template>

<style scoped>
.longLine {
  border: 1px #999 solid;
}
</style>
