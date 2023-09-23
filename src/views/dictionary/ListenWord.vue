<script setup>
import { useRouter } from 'vue-router'
import WordPronunciation from '@/components/dictionary/WordPronunciation.vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
const router = useRouter()
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="LWNav"
    title="XXX生词本"
  ></van-nav-bar>
  <div class="LWContainer">
    <div class="groupLearning">1/4268</div>
    <div class="word">dictionary</div>
    <div class="line"></div>
    <div class="WPCon">
      <WordPronunciation class="SBTDPro">
        <template #header>英</template>
        <template #main>/ ˈdɪkʃən(ə)ri /</template>
      </WordPronunciation>
      <WordPronunciation class="SBTDPro" style="margin-left: 10px">
        <template #header>美</template>
        <template #main>/ ˈdɪkʃən(ə)ri /</template>
      </WordPronunciation>
    </div>

    <div class="chineseTrans">n. 字典，词典；专业词典；术语大全...</div>
    <div class="longLine"></div>

    <div class="longDotted"></div>
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
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
      <template #footer> 《牛津词典》</template>
    </BilingualExample>
    <div class="moreExplain" @click="router.push('/searchByTransDetail')">
      详细释义 >
    </div>
    <div class="BEFooter">
      <div class="pre">
        <img
          src="@/assets/dictionary/Previous.png"
          style="
            width: 45px;
            height: 45px;
            background-color: #ececec;
            border-radius: 50%;
            padding: 10px 11px 9px 8px;
          "
          alt="上一个"
        />
      </div>
      <div class="cent">
        <img
          src="@/assets/dictionary/beginPlay.png"
          style="width: 22px; height: 22px"
          alt="播放单词"
        />
        <span class="beginPlay">播放单词</span>
      </div>
      <div class="next">
        <img
          src="@/assets/dictionary/Next.png"
          style="
            width: 45px;
            height: 45px;
            background-color: #ececec;
            border-radius: 50%;
            padding: 10px 8px 9px 11px;
          "
          alt="下一个"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.LWContainer {
  padding: 32px 14px 60px 14px;
  height: 600px;
  .groupLearning {
    margin-left: 14px;
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .word {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #292929;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .line {
    margin: 4px 114px 19px 114px;
    width: 120px;
    border: 1px #dadada solid;
  }
  .WPCon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  .chineseTrans {
    color: #292929;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 14px;
  }
  .longLine {
    border: 1px #9d9d9d dashed;
    width: 314px;
    margin: 15px 16px;
  }
  .BEx {
    margin-bottom: 13px;
    margin-left: 17px;
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
    margin-top: 145px;
  }
  .BEFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    .cent {
      width: 228px;
      height: 45px;
      border: 1px #11d075 solid;
      margin: 12px 15px;
      border-radius: 30px;
      background: #11d075;
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      justify-content: center;
      .beginPlay {
        margin-left: 14px;
        color: #fff;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
}
</style>
