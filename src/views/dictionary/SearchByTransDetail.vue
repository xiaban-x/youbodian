<script setup>
import { useRouter } from 'vue-router'
import WordPronunciation from '@/components/dictionary/WordPronunciation.vue'
import { ref } from 'vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
import PhraseTwoDiv from '@/components/dictionary/PhraseTwoDiv.vue'
const router = useRouter()
const active = ref(0)
const active2 = ref(0)
const border = ref('1px solid #fff')
</script>
<template>
  <div class="SBTDHeader">
    <van-nav-bar
      left-arrow
      @click-left="router.go(-1)"
      class="SBTDNav"
    ></van-nav-bar>
    <img
      class="SBTDHImg"
      src="@/assets/dictionary/ErrorCorrection.svg"
      alt="纠错"
      @click="router.push('ErrorCorrPage')"
    />
  </div>
  <div class="SBTDContainer">
    <div class="word">dictionary</div>
    <div class="longLine"></div>
    <WordPronunciation class="SBTDPro">
      <template #header>英</template>
      <template #main>/ ˈdɪkʃən(ə)ri /</template>
    </WordPronunciation>
    <WordPronunciation class="SBTDPro">
      <template #header>美</template>
      <template #main>/ ˈdɪkʃən(ə)ri /</template>
    </WordPronunciation>
    <van-tabs
      class="SBTDTabs"
      color="#11D075"
      v-model:active="active"
      scrollspy
      sticky
    >
      <van-tab title="中文释义">
        <div class="chineseTrans">n. 字典，词典；专业词典；术语大全...</div>
      </van-tab>
      <div class="longDotted"></div>
      <van-tab title="双语例句">
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
        <BilingualExample class="BEx">
          <template #header> I looked it up in the dictionary.</template>
          <template #main> 我在词典里查过这个词。</template>
          <template #footer> 《牛津词典》</template>
        </BilingualExample>
        <div
          class="recommended-course-more"
          @click="router.push('bilingualExamplePage')"
        >
          查看更多>
        </div>
      </van-tab>
      <div class="longDotted"></div>
      <van-tab title="真题例句">
        <div class="paragraphTitle">真题例句</div>
        <BilingualExample class="BEx">
          <template #header>
            You can usually also personalize a coIt seems only reasonable to ask
            students to buy a dictionary.</template
          >
          <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
          <template #footer> 来源：2022年高考 北京卷</template>
        </BilingualExample>
        <BilingualExample class="BEx">
          <template #header>
            You can usually also personalize a coIt seems only reasonable to ask
            students to buy a dictionary.</template
          >
          <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
          <template #footer> 来源：2022年高考 北京卷</template>
        </BilingualExample>
        <BilingualExample class="BEx">
          <template #header>
            You can usually also personalize a coIt seems only reasonable to ask
            students to buy a dictionary.</template
          >
          <template #main> 要学生买一本词典，好像也没什么不合情理。</template>
          <template #footer> 来源：2022年高考 北京卷</template>
        </BilingualExample>
        <div
          class="recommended-course-more"
          @click="router.push('realTestPage')"
        >
          查看更多>
        </div>
      </van-tab>
      <div class="longDotted"></div>

      <van-tab title="词语扩展">
        <div class="paragraphTitle">词语扩展</div>
        <div class="expansionTabsDiv">
          <van-tabs
            v-model:active="active2"
            title-active-color="#fff"
            title-inactive-color="#000"
            line-width="67px"
            shrink
            animated
            type="card"
            color="#11D075"
            :border="border"
            class="expansionTabs"
          >
            <van-tab title="近义词">
              <div class="expansionTab">
                <div>
                  <div class="synonyms" v-for="index in 5" :key="index">
                    test{{ index }}
                  </div>
                </div>
                <div class="noteAndCol">
                  <div class="noteAndColCon">
                    <div class="img">
                      <img src="@/assets/dictionary/Notes.svg" alt="笔记" />
                    </div>
                    <div class="text1">笔记3.9万</div>
                  </div>
                  <div>
                    <img
                      src="@/assets/dictionary/VerticalPole.svg"
                      alt="竖杆"
                    />
                  </div>
                  <div class="noteAndColCon">
                    <div class="img">
                      <img src="@/assets/dictionary/Collect.svg" alt="收藏" />
                    </div>
                    <div class="text2">收藏4.5万</div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="短语">
              <div class="expansionTab">
                <div>
                  <PhraseTwoDiv>
                    <template #main> electronic dictionary </template>
                    <template #footer> 电子字典</template>
                  </PhraseTwoDiv>
                  <PhraseTwoDiv>
                    <template #main> electronic dictionary </template>
                    <template #footer> 电子字典</template>
                  </PhraseTwoDiv>
                  <PhraseTwoDiv>
                    <template #main> electronic dictionary </template>
                    <template #footer> 电子字典</template>
                  </PhraseTwoDiv>
                  <PhraseTwoDiv>
                    <template #main> electronic dictionary </template>
                    <template #footer> 电子字典</template>
                  </PhraseTwoDiv>
                </div>
                <div class="noteAndCol">
                  <div class="noteAndColCon">
                    <div class="img">
                      <img src="@/assets/dictionary/Notes.svg" alt="笔记" />
                    </div>
                    <div class="text1">笔记3.9万</div>
                  </div>
                  <div>
                    <div>
                      <img
                        src="@/assets/dictionary/VerticalPole.svg"
                        alt="竖杆"
                      />
                    </div>
                  </div>
                  <div class="noteAndColCon">
                    <div class="img">
                      <img src="@/assets/dictionary/Collect.svg" alt="收藏" />
                    </div>
                    <div class="text2">收藏4.5万</div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
.SBTDHeader {
  padding-top: 12px;
  background: linear-gradient(
    268deg,
    #dffff0 0%,
    #dffff0 32%,
    rgba(223, 255, 240, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  .SBTDHImg {
    margin-right: 13px;
  }
  .SBTDNav {
    background: none;
  }
}
.SBTDContainer {
  padding-left: 14px;
  background-color: #fff;
  .word {
    color: #292929;
    font-size: 24px;
    font-weight: 500;
    word-wrap: break-word;
    padding-top: 16px;
    margin-bottom: 10px;
  }

  .chineseTrans {
    margin-top: 14px;
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .longLine {
    width: 347px;
    border: 0.25px #c3c3c3 solid;
  }
  .longDotted {
    width: 347px;
    border: 0.25px #c3c3c3 dotted;
    margin-top: 13px;
  }
  .paragraphTitle {
    padding-top: 13px;
  }
  .BEx {
    margin-top: 13px;
  }
  .SBTDPro {
    margin-top: 10px;
  }
  .recommended-course-more {
    margin-left: 139px;
    margin-top: 18px;
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .expansionTabs {
    border: 0 solid #fff;
    .van-tabs__nav--card {
      border-radius: 5px; /* 圆角标签背景 */
    }
  }
  .synonyms {
    color: #292929;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
  }
  .expansionTabsDiv {
    margin-top: 13px;
    height: 400px;
    .expansionTab {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 19px;
      margin-top: 13px;
      margin-left: 10px;
    }

    .noteAndCol {
      background-color: #677e6a;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      width: 150px;
      height: 47px;
      word-wrap: break-word;

      .noteAndColCon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .text1 {
          color: white;
          font-size: 10px;
          font-weight: 500;
          margin-right: 8px;
        }

        .text2 {
          color: white;
          font-size: 10px;
          font-weight: 500;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
