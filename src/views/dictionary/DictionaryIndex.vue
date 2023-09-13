<script setup>
import ImgSpanOne from '@/components/ImgSpanOne.vue'
import SpanDivOne from '@/components/SpanDivOne.vue'
import ImgUpperRightText from '@/components/ImgUpperRightText.vue'
import SixLevel from '@/assets/dictionary/SixLevel.png'
import SixLevel2 from '@/assets/dictionary/SixLevel2.png'
import GMAT from '@/assets/dictionary/GMAT.png'
import TOEFL from '@/assets/dictionary/TOEFL.png'
import { ref } from 'vue'
import Btn146 from '@/components/Btn146.vue'
import Search from '@/components/Search.vue'
// const pay = ref('linear-gradient(to left,#FF7438, #FF9472)')
// const pay = ref('linear-gradient(to right, #FF7438, #FF9472)')
// const free = ref('linear-gradient(to left,#11D075, #C0FFE1)')
// const free = ref('rgb(100,0,0)')
import { useRouter } from 'vue-router'
const router = useRouter()
const buttonTextLearn = ref('学习')
const imageUrlLearn = ref('src/assets/dictionary/VerticalBarGreen.svg')
const additionalTextLearn = ref('待学习45')
const backgroundColorLearn = ref('#E9FFF4') // 背景颜色
const textColorOneLearn = ref('#11D075')
const textColorTwo = ref('#666666')
const buttonTextReview = ref('复习')
const imageUrlReview = ref('src/assets/dictionary/VerticalBarOrange.svg')
const additionalTextReview = ref('待复习45')
const backgroundColorReview = ref('#FFF9F8') // 背景颜色
const textColorOneReview = ref('#1890FF')
const value = ref(50)
const isShow = ref(false)
</script>
<template>
  <div class="bgcGreen">
    <div class="top">
      <div class="left">会计</div>
      <div class="right">
        <img src="src/assets/dictionary/SelectProfession.svg" alt="行业" />
      </div>
    </div>
    <Search></Search>
  </div>
  <div class="container">
    <SpanDivOne>
      <template #footer>
        <div class="book">
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="src/assets/dictionary/VocabularyBook.png"
                alt="单词本"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 单词本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img src="src/assets/dictionary/MiswordBook.png" alt="错词本" />
            </template>
            <!-- 文字插槽 -->
            <template #text> 错词本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="src/assets/dictionary/CollectedEdition.png"
                alt="收藏本"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 笔记本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img src="src/assets/dictionary/NoteBook.png" alt="笔记本" />
            </template>
            <!-- 文字插槽 -->
            <template #text> 笔记本 </template>
          </ImgSpanOne>
        </div>
      </template></SpanDivOne
    >
    <SpanDivOne>
      <template #header> 每日学习打卡 </template>
      <template #footer>
        <div class="learnCon">
          <div class="date">
            <div class="clockIn">累积打卡天数</div>
            <div class="day">7</div>
          </div>
          <div class="barFather">
            <div class="bar">
              <div class="progressTitle">
                <div class="progressName">今日刷单词</div>
                <div class="progressNum">5/20个</div>
              </div>
              <div class="progress">
                <van-progress
                  :percentage="value"
                  stroke-width="7"
                  color="linear-gradient(to left, #1890FF, #1890FF9C)"
                  :show-pivot="isShow"
                ></van-progress>
              </div>
            </div>
            <div class="bar">
              <div class="progressTitle">
                <div class="progressName">今日做题</div>
                <div class="progressNum">5/20个</div>
              </div>
              <div class="progress">
                <van-progress
                  :percentage="value"
                  stroke-width="7"
                  color="linear-gradient(to left, #48D780, #48D7806B)"
                  :show-pivot="isShow"
                ></van-progress>
              </div>
            </div>
            <div class="bar">
              <div class="progressTitle">
                <div class="progressName">今日学习</div>
                <div class="progressNum">5/20个</div>
              </div>
              <div class="progress">
                <van-progress
                  :percentage="value"
                  stroke-width="7"
                  color="linear-gradient(to left, #F57126, #FF8D236B)"
                  :show-pivot="isShow"
                ></van-progress>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SpanDivOne>
    <SpanDivOne>
      <template #header>
        <div class="wordMemoryHeader">
          <div class="wordMemoryHeaderTitle">单词速记</div>
          <div class="wordMemoryHeaderSubTitle">
            <span>学习日历</span>
            <span class="arrow"
              ><img src="src/assets/dictionary/Arrow.svg" alt="箭头"
            /></span>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="wordMemoryContainer">
          <div class="wordMemoryContainerOne">
            <span class="wordMemoryContainerOneOne">TOEFL必备词汇 &nbsp;</span>
            <span class="wordMemoryContainerOneTwo"
              ><img src="src/assets/dictionary/Arrow.svg" alt="箭头"
            /></span>
            <span
              class="wordMemoryContainerOneThree"
              @click="router.push('exchangeGlossary')"
              >&nbsp; 更换</span
            >
          </div>
          <div class="wordMemoryContainerTwo">28/2000</div>
          <div class="wordMemoryContainerThree">
            <!--            <BtnGreen message="学习 | 待学习45"></BtnGreen>-->
            <!--            <BtnGreen message="复习 | 待复习45"></BtnGreen>-->
            <Btn146
              @click="router.push('learnGlossaryPage')"
              :buttonText="buttonTextLearn"
              :imageUrl="imageUrlLearn"
              :additionalText="additionalTextLearn"
              :backgroundColor="backgroundColorLearn"
              :textColorOne="textColorOneLearn"
              :textColorTwo="textColorTwo"
            >
            </Btn146>
            <span class="Btn146Second"
              ><Btn146
                @click="router.push('learnGlossaryPage')"
                :buttonText="buttonTextReview"
                :imageUrl="imageUrlReview"
                :additionalText="additionalTextReview"
                :backgroundColor="backgroundColorReview"
                :textColorOne="textColorOneReview"
                :textColorTwo="textColorTwo"
              >
              </Btn146>
            </span>
          </div>
        </div>
      </template>
    </SpanDivOne>
    <SpanDivOne>
      <template #header>
        <div class="newWordHeader">
          <div class="newWordHeaderTitle">生词本</div>
          <div class="newWordHeaderSubTitle">编辑</div>
        </div>
      </template>
      <template #footer>
        <div class="newWordContainer">
          <ImgUpperRightText :imageUrl="SixLevel" :text-content="'付费'">
            <!-- 右上角的插槽 -->
            <template v-slot:right-top-text>
              <p>付费</p>
            </template>
            <!-- 中间偏上的插槽 -->
            <template v-slot:center-text>
              <p>六级词汇 &nbsp;</p>
            </template>
          </ImgUpperRightText>
          <ImgUpperRightText :imageUrl="GMAT" :text-content="'免费'">
            <!-- 右上角的插槽 -->
            <template v-slot:right-top-text>
              <p>免费</p>
            </template>
            <!-- 中间偏上的插槽 -->
            <template v-slot:center-text>
              <p>GMAT &nbsp; 必备词汇</p>
            </template>
          </ImgUpperRightText>
          <ImgUpperRightText :imageUrl="TOEFL" :text-content="'付费'">
            <!-- 右上角的插槽 -->
            <template v-slot:right-top-text>
              <p>付费</p>
            </template>
            <!-- 中间偏上的插槽 -->
            <template v-slot:center-text>
              <p>TOEFL必备词汇</p>
            </template>
          </ImgUpperRightText>
          <ImgUpperRightText :imageUrl="SixLevel2" :text-content="'付费'">
            <!-- 右上角的插槽 -->
            <template v-slot:right-top-text>
              <p>付费</p>
            </template>
            <!-- 中间偏上的插槽 -->
            <template v-slot:center-text>
              <p>六级词汇 &nbsp;</p>
            </template>
          </ImgUpperRightText>
          <div class="plus">
            <img src="src/assets/dictionary/Blank.png" alt="空白" />
            <div class="plusInner">
              <div class="plusInnerImg">
                <img src="src/assets/dictionary/Plus.png" alt="加号" />
              </div>
              <div class="plusInnerText">添加生词本</div>
            </div>
          </div>
        </div>
      </template>
    </SpanDivOne>
  </div>
</template>

<style scoped>
.bgcGreen {
  background: linear-gradient(to bottom, #c3feda, #ffffff);
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-right: 16px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 27px;
    margin-top: 23px;
  }

  .left {
    flex: 1;
  }

  .right {
    margin-left: 10px; /* 调整右侧图片与文字的间距 */
  }
}
.container {
  width: 347px;
  margin-left: 14px;

  /*.book {*/
  /*  display: flex;*/
  /*  flex-direction: row; !* 水平分布 *!*/
  /*  align-items: center; !* 水平居中 *!*/
  /*  justify-content: center; !* 居中 *!*/
  /*}*/
  .book {
    border-radius: 15px;
    border: 1px solid #fff;
    display: flex;
    flex-wrap: wrap; /* 自动换行 */
    justify-content: flex-start; /* 从左到右排列 */
    gap: 23px; /* 间隙 */
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    background-color: #fff;
    margin: 19px 25px 22px 10px;
  }

  /* 如果需要控制每个组件的宽度，可以添加以下样式 */
  .book > * {
    flex: 1; /* 平均分配容器宽度 */
    max-width: calc(33%); /* 每个组件最大宽度，根据需要调整 */
  }
  .learnCon {
    padding-top: 19px;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 18px;
    padding-left: 15px;
    .date {
      width: 96px;
      .clockIn {
        background-color: #11d075;
        border: 1px solid #b9b9b9;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: white;
        font-size: 12px;
        font-weight: 400;
        word-wrap: break-word;
        /*padding-left: 12px;*/
        padding-top: 9px;
        text-align: center;
        height: 36px;
      }
      .day {
        height: 68px;
        color: #292929;
        font-size: 30px;
        font-weight: 500;
        word-wrap: break-word;
        border: 1px solid #b9b9b9;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding-top: 10px;
        /*padding-left: 38px;*/
        text-align: center;
      }
    }
    .barFather {
      padding-left: 21px;
      .bar {
        display: flex;
        width: 146px;
        flex-direction: column;
        .progressTitle {
          display: flex;
          flex-direction: row;
          margin-bottom: 4px;
          width: 200px;
          .progressName {
            color: #292929;
            font-size: 12px;
            font-weight: 400;
            word-wrap: break-word;
            width: 60px;
          }
          .progressNum {
            color: #666666;
            font-size: 12px;
            font-weight: 400;
            word-wrap: break-word;
            margin-left: 104px;
          }
        }
        .progress {
          /*width: 200px; !* 调整进度条的宽度 *!*/
          width: 200px; /* 调整进度条的宽度 */
          margin-bottom: 9px;
        }
      }
    }
  }
  .wordMemoryHeader {
    display: flex;
    justify-content: space-between; /* 将子元素分散对齐 */
    align-items: center; /* 垂直居中对齐 */
    .wordMemoryHeaderTitle {
      /* 样式可以按需调整 */
      color: #292929;
      font-size: 16px;
      font-weight: 500;
      word-wrap: break-word;
    }

    .wordMemoryHeaderSubTitle {
      /* 样式可以按需调整 */
      display: flex;
      align-items: center;
      color: #666666;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }

    .arrow {
      /* 样式可以按需调整 */
      margin-left: 4px; /* 调整箭头和文字之间的间距 */
      margin-top: 4px;
    }
  }
  .wordMemoryContainer {
    margin-left: 15px;
    margin-top: 10px;
    .wordMemoryContainerOne {
      .wordMemoryContainerOne {
        color: #292929;
        font-size: 16px;
        font-weight: 400;
        word-wrap: break-word;
      }
      .wordMemoryContainerOneThree {
        color: #999999;
        font-size: 12px;
        font-weight: 400;
        word-wrap: break-word;
      }
    }
    .wordMemoryContainerTwo {
      color: #999999;
      font-size: 12px;
      font-weight: 400;
      word-wrap: break-word;
      margin-top: 11px;
      margin-bottom: 10px;
    }
    .wordMemoryContainerThree {
      display: flex;
      margin-bottom: 19px;
      .Btn146Second {
        margin-left: 26px;
      }
    }
  }
  .newWordHeader {
    display: flex;
    justify-content: space-between; /* 将子元素分散对齐 */
    align-items: center; /* 垂直居中对齐 */
    .newWordHeaderTitle {
      /* 样式可以按需调整 */
      color: #292929;
      font-size: 16px;
      font-weight: 500;
      word-wrap: break-word;
    }

    .newWordHeaderSubTitle {
      /* 样式可以按需调整 */
      display: flex;
      align-items: center;
      color: #11d075;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
  .newWordContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 15px;
    margin-top: 17px;
  }

  /* 如果需要控制每个组件的宽度，可以添加以下样式 */

  .plus {
    position: relative;
    .plusInner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .plusInnerImg {
        margin-left: 20px;
      }
      .plusInnerText {
        color: #666666;
        font-size: 10px;
        font-weight: 400;
        word-wrap: break-word;
        width: 60px;
        margin-right: 14px;
      }
    }
  }
}
p {
  width: 56px;
}
</style>
