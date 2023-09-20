<script setup>
import ImgSpanOne from '@/components/ImgSpanOne.vue'
import SpanDivOne from '@/components/SpanDivOne.vue'
import { ref } from 'vue'
import Search from '@/components/Search.vue'
import BasicProblem from '@/components/BasicProblem.vue'
import LeftImgRightTwoDiv from '@/components/LeftImgRightTwoDiv.vue'
import router from '@/router'
// const pay = ref('linear-gradient(to left,#FF7438, #FF9472)')
// const pay = ref('linear-gradient(to right, #FF7438, #FF9472)')
// const free = ref('linear-gradient(to left,#11D075, #C0FFE1)')
// const free = ref('rgb(100,0,0)')
const titleColorOne = ref('#11D075')
const subTitleColorOne = ref('#65E2A6')
const titleColorTwo = ref('#1890FF')
const subTitleColorTwo = ref('#6DB8FE')
const PracticalTest = ref('#E0F8EC')
const ReinforcementLearning = ref('#D7ECFF')

const value = ref(50)
const isShow = ref(false)
</script>
<template>
  <div class="bgcGreen">
    <div class="top">
      <div class="left">会计</div>
      <div class="right">
        <img src="@/assets/dictionary/SelectProfession.svg" alt="行业" />
      </div>
    </div>
    <Search @click="router.push('/searchTopic')"></Search>
  </div>
  <div class="container">
    <SpanDivOne>
      <template #footer>
        <div class="book">
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="@/assets/training/MiswordNotebook.png"
                style="width: 38px; height: 38px"
                alt="错词本"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 错词本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="@/assets/training/CollectedEdition.png"
                style="width: 38px; height: 38px"
                alt="收藏本"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 收藏本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="@/assets/training/NoteBook.png"
                style="width: 38px; height: 38px"
                alt="笔记本"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 笔记本 </template>
          </ImgSpanOne>
          <ImgSpanOne>
            <!-- 图片插槽 -->
            <template #image>
              <img
                src="@/assets/training/ProblemRecord.png"
                style="width: 38px; height: 38px"
                alt="做题记录"
              />
            </template>
            <!-- 文字插槽 -->
            <template #text> 做题记录 </template>
          </ImgSpanOne>
        </div>
      </template>
    </SpanDivOne>
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
    <div class="max375">
      <SpanDivOne>
        <!--      <template #header> </template>-->
        <template #footer>
          <div class="basicProblemHeaderTitle">基础题库</div>
          <div class="basicProblemContainer">
            <div class="basicProblem">
              <BasicProblem
                gradientColor1="#F2FFF9"
                gradientColor2="white"
                :titleColor="titleColorOne"
                :subtitleColor="subTitleColorOne"
                title="速记刷题"
                subtitle="零随时快速学习"
              >
                <!-- 这里可以放自定义内容 -->
                <br />

                <div class="bar">
                  <div class="progressTitle">
                    <div class="progressName">
                      <span class="progressNameOne">5</span>
                      <span class="progressNameTwo">/</span>
                      <span class="progressNameThree">1120</span>
                    </div>
                    <div class="progressNum">总进度</div>
                  </div>
                  <div class="progress">
                    <van-progress
                      :percentage="value"
                      stroke-width="7"
                      color="#11D075"
                      track-color="#C5F1DB"
                      :show-pivot="isShow"
                    ></van-progress>
                  </div>
                </div>
                <div class="bar">
                  <div class="progressTitle">
                    <div class="progressName">
                      <span class="progressNameOne">0</span>
                      <span class="progressNameTwo"></span>
                      <span class="progressNameThree"></span>
                    </div>
                    <div class="progressNum">今日做题</div>
                  </div>
                  <div class="progress">
                    <van-progress
                      :percentage="value"
                      stroke-width="7"
                      color="#11D075"
                      :show-pivot="isShow"
                      track-color="#C5F1DB"
                    ></van-progress>
                  </div>
                </div>
              </BasicProblem>
            </div>
            <div class="basicProblem">
              <BasicProblem
                gradientColor1="#F3F9FF"
                gradientColor2="#FFFFFF"
                :titleColor="titleColorTwo"
                :subtitleColor="subTitleColorTwo"
                title="章节练习"
                subtitle="零随时快速学习"
              >
                <!-- 这里可以放自定义内容 -->
                <br />

                <div class="bar">
                  <div class="progressTitle">
                    <div class="progressName">
                      <span class="progressNameOne">11</span>
                      <span class="progressNameTwo">/</span>
                      <span class="progressNameThree">1348</span>
                    </div>
                    <div class="progressNum">总进度</div>
                  </div>
                  <div class="progress">
                    <van-progress
                      :percentage="value"
                      stroke-width="7"
                      color="#1890FF"
                      track-color="#9FD1FF"
                      :show-pivot="isShow"
                    ></van-progress>
                  </div>
                </div>
                <div class="bar">
                  <div class="progressTitle">
                    <div class="progressName">
                      <span class="progressNameOne">35%</span>
                      <span class="progressNameTwo"></span>
                      <span class="progressNameThree"></span>
                    </div>
                    <div class="progressNum">总得分率</div>
                  </div>
                  <div class="progress">
                    <van-progress
                      :percentage="value"
                      stroke-width="7"
                      color="#1890FF"
                      :show-pivot="isShow"
                      track-color="#9FD1FF"
                    ></van-progress>
                  </div>
                </div>
              </BasicProblem>
            </div>
          </div>
        </template>
      </SpanDivOne>
      <SpanDivOne>
        <template #header> 历年真题 </template>
        <template #footer>
          <LeftImgRightTwoDiv :ImgColor="PracticalTest">
            <template #image>
              <img src="@/assets/training/PracticalTest.svg" alt="Image" />
            </template>
            <template #title> 真题实战 </template>
            <template #content> 真题模拟，提前磨练，有效实战 </template>
          </LeftImgRightTwoDiv>
        </template>
      </SpanDivOne>
      <SpanDivOne>
        <template #header> 强化练习 </template>
        <template #footer>
          <LeftImgRightTwoDiv :ImgColor="ReinforcementLearning">
            <template #image>
              <img
                src="@/assets/training/ReinforcementLearning.svg"
                alt="Image"
              />
            </template>
            <template #title> 自由联系 </template>
            <template #content> 考前检测，加强提升 </template>
          </LeftImgRightTwoDiv>
        </template>
      </SpanDivOne>
    </div>
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
  padding-left: 14px;
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
    gap: 10px; /* 间隙 */
    color: #292929;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
    background-color: #fff;
    margin: 19px 25px 22px 1px;
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
          justify-content: space-between;
          width: 200px;
          .progressName {
            color: #292929;
            font-size: 12px;
            font-weight: 400;
            word-wrap: break-word;
          }
          .progressNum {
            color: #666666;
            font-size: 12px;
            font-weight: 400;
            word-wrap: break-word;
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
  .max375 {
    .basicProblemHeaderTitle {
      /* 样式可以按需调整 */
      width: 347px;
      color: #292929;
      font-size: 16px;
      font-weight: 500;
      word-wrap: break-word;
      background-color: #fff;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      border: 1px solid #fff;
      padding-top: 9px;
      padding-bottom: 8px;
    }
    .basicProblemContainer {
      width: 347px;
      display: flex;
      background-color: #fff;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      border: 1px solid #fff;
      .basicProblem {
        margin-left: 11px;
        width: 157px;
        height: 165px;
        margin-bottom: 20px;

        .progressTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          .progressName {
            flex: 1;
            .progressNameOne {
              color: #666666;
              font-size: 14px;
              font-weight: 400;
              word-wrap: break-word;
            }
            .progressNameTwo {
              color: #666666;
              font-size: 14px;
              font-weight: 400;
              word-wrap: break-word;
            }
            .progressNameThree {
              color: #666666;
              font-size: 10px;
              font-weight: 400;
              word-wrap: break-word;
            }
          }
          .progressNum {
            color: #999999;
            font-size: 12px;
            font-weight: 400;
            word-wrap: break-word;
          }
        }
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
    display: flex;
    flex-wrap: wrap; /* 自动换行 */
    justify-content: flex-start; /* 从左到右排列 */
    gap: 20px; /* 间隙 */
    margin-left: 15px;
    margin-top: 17px;
  }

  /* 如果需要控制每个组件的宽度，可以添加以下样式 */
  .newWordContainer > * {
    flex: 1; /* 平均分配容器宽度 */
    max-width: calc(33.3% - 19px); /* 每个组件最大宽度，根据需要调整 */
  }
  .plus {
    position: relative;
    .plusInner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .plusInnerImg {
        margin-left: 28px;
      }
      .plusInnerText {
        color: #666666;
        font-size: 10px;
        font-weight: 400;
        word-wrap: break-word;
        width: 60px;
        margin-left: 5px;
      }
    }
  }
  p {
    width: 56px;
  }
}
</style>
