<script setup>
import { ref } from 'vue'
import router from '@/router'
import Comment from '@/components/training/Comment.vue'

const topicTitle = ref('下列关于会计基础的表述，不正确的是（）。')
const topicOptions = ref([
  'A.在会计分期的前提下，会计确认、计量和 报告应该以企业持续、正常的生产经营活动 为前提',
  'B.在会计分期的前提下，会计确认、计量',
  'C.持续经营确定了会计核算的空间范围',
  'D.会计分期确立了会计核算的时间范围'
])
</script>

<template>
  <div class="top">
    <div class="goPre">
      <img
        src="@/assets/training/Back.png"
        style="width: 14px; height: 14px"
        alt="返回"
        @click="router.go(-1)"
      />
    </div>
    <div class="icons">
      <img
        src="@/assets/training/Translation.png"
        style="width: 22px; height: 22px"
        alt="翻译"
      />
      <img
        src="@/assets/training/Share.png"
        style="width: 23px; height: 23px"
        alt="分享"
        @click="router.push('/analysisShare')"
      />
      <img
        src="@/assets/training/ErrorFixed.png"
        style="width: 18px; height: 18px"
        alt="纠错"
        @click="router.push('/errorFixed')"
      />
      <img
        src="@/assets/training/Delete.png"
        style="width: 23px; height: 23px"
        alt="删除"
      />
      <img
        src="@/assets/training/Collected.png"
        style="width: 23px; height: 23px"
        alt="收藏"
      />
      <img
        src="@/assets/training/Date.png"
        style="width: 27px; height: 27px"
        alt="答题卡"
        @click="router.push('/answerSheetOnlyResult')"
      />
    </div>
  </div>
  <div class="ATContainer">
    <div class="title">
      <div class="topicCount">单选题1/30</div>
      <div class="topicNum">题号：5113232154</div>
    </div>
    <div class="topicMain">
      <div class="topicTitle">{{ topicTitle }}</div>
      <div
        class="topicOptions"
        v-for="(item, index) in topicOptions"
        :key="index"
      >
        {{ item }}
      </div>
      <div class="longLine"></div>
      <div class="answerCon">
        <div class="answer">
          <div class="text">你的答案</div>
          <div class="data">A</div>
        </div>
        <div class="avgTrueRate">
          <div class="text">平均正确率</div>
          <div class="data">50%</div>
        </div>
        <div class="trueAnswer">
          <div class="text">正确答案</div>
          <div class="data">D</div>
        </div>
      </div>
    </div>
    <div class="answerAnalysis">
      <div class="title">答案解析</div>
      <div class="content">
        选项AB：会计基础包括权责发生制和收付实现制，企业
        会计的确认、计量和报告应当以权责发生制为基础。选
        项AB表述正确，故不当选。 选项C：2015年10月，财政部制定发布了《政府会计准
        则-- 基本准则》，适用于与本级政府财政部门直接或者
        间接发生预算拨款关系的事业单位。准则规定预算会计
        实行收付实现制，国务院另有规定的，从其规定;财务 会计实行权责发生制
        。选项C表述错误，故当选。 选项D：我国政府会计由预算会计和财务会计构成。
        预算会计实行收付实现制，国务院另有规定的，从其
        规定;财务会计实行权责发生制。选项 D表述正确，不 当选。
      </div>
    </div>
    <div class="examAndSource">
      <div class="exam">
        <div>考点</div>
        <div class="con">
          <div class="exam1">
            <img
              src="@/assets/training/GreenMontant.png"
              style="width: 5px; height: 20px"
              alt="绿色竖杆"
            />
            <span class="text">权责发生制</span>
          </div>
          <div class="exam2">
            <img
              src="@/assets/training/GreenMontant.png"
              style="width: 5px; height: 20px"
              alt="绿色竖杆"
            />
            <span class="text">考核</span>
            <img
              src="@/assets/training/Star.png"
              style="width: 13px; height: 13px"
              alt="星星"
            />
            <img
              src="@/assets/training/Star.png"
              style="width: 13px; height: 13px"
              alt="星星"
            />
            <img
              src="@/assets/training/Star.png"
              style="width: 13px; height: 13px"
              alt="星星"
            />
            <img
              src="@/assets/training/Star.png"
              style="width: 13px; height: 13px"
              alt="星星"
            />
            <img
              src="@/assets/training/Star.png"
              style="width: 13px; height: 13px"
              alt="星星"
            />
          </div>
        </div>
      </div>
      <div class="source">
        <div>来源</div>
        <div class="con">
          <img
            src="@/assets/training/GreenMontant.png"
            style="width: 5px; height: 20px"
            alt="绿色竖杆"
          />
          <span class="text">2022年真题</span>
        </div>
      </div>
    </div>
    <div class="statute">
      <div>法条</div>
      <div class="text">《XXXXXXX》第一百二十条</div>
    </div>
    <div class="myNote">
      <div class="top">
        <div>我的笔记</div>
        <div class="edit" @click="router.push('/editNotebook')">编辑</div>
      </div>
      <div class="text">这道题的考点是权责发生制，很容易犯错，需要注意。</div>
    </div>
    <div class="topicDiscussion">
      <div class="top">
        <div>题目评论</div>
        <div class="add" @click="router.push('/addComment')">添加</div>
      </div>
      <div class="disCon">
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
      </div>
      <div class="bottom" @click="router.push('/lookMore')">查看更多 &gt;</div>
    </div>
    <div class="longLine"></div>
    <div class="topicAnswer">
      <div class="top">
        <div>题目答疑</div>
        <div class="add" @click="router.push('/addAsk')">添加</div>
      </div>
      <div class="disCon">
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
        <Comment>
          <!-- 头像插槽 -->
          <template v-slot:avatar>
            <img
              src="@/assets/training/Avatar.png"
              style="width: 36px; height: 36px"
              alt="用户头像"
            />
          </template>
          <!-- 名称插槽 -->
          <template v-slot:name> John Doe </template>
          <!-- 评论插槽 -->
          <template v-slot:comment> 违背了会计政策，违背了会计政策 </template>
          <!-- 时间插槽 -->
          <template v-slot:time> 2 hours ago </template>
          <!-- 点赞数量插槽 -->
          <template v-slot:likes-icon
            ><img
              src="@/assets/training/NotLike.png"
              style="width: 23px; height: 23px"
              alt="点赞"
            /> </template
          ><!-- 点赞数量插槽 -->
          <template v-slot:likes-count> 42 </template>
        </Comment>
      </div>
      <div class="bottom" @click="router.push('/allAnswer')">全部答疑 &gt;</div>
    </div>
  </div>
  <div class="noteAndCol">
    <div class="noteAndColCon" @click="router.push('/editTopicNote')">
      <div class="img">
        <img
          src="@/assets/dictionary/Notes.svg"
          style="margin-right: 14px"
          alt="笔记"
        />
      </div>
      <div class="text1">笔记</div>
    </div>
    <div>
      <div>
        <img src="@/assets/dictionary/VerticalPole.svg" alt="竖杆" />
      </div>
    </div>
    <div class="noteAndColCon">
      <div class="img">
        <img
          src="@/assets/dictionary/Collect.svg"
          style="margin-left: 14px"
          alt="收藏"
        />
      </div>
      <div class="text2">收藏</div>
    </div>
  </div>
</template>

<style scoped>
.top {
  background: #11d075;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  .goPre {
    color: #fff;
    font-size: 24px;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    width: 174px;
    align-items: center;
  }
}
.ATContainer {
  width: 375px;
  padding: 13px 14px 200px;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .topicCount {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .topicNum {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .topicMain {
    width: 347px;
    border-radius: 10px;
    background: #fff;
    padding-bottom: 23px;
    .topicTitle {
      padding-top: 20px;
      padding-left: 15px;
      padding-bottom: 7px;
      color: #333;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .topicOptions {
      width: 300px;
      border-radius: 5px;
      background: #f9f9f9;
      margin-top: 11px;
      margin-left: 24px;
      padding: 13px 17px 13px 17px;
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .longLine {
      width: 300px;
      height: 0;
      border: 1px #c7c7c7 dashed;
      margin: 19px 0 12px 24px;
    }
    .answerCon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 37px 0 37px;
      .answer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .data {
          color: red;
        }
      }
      .avgTrueRate {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .data {
          color: red;
        }
      }
      .trueAnswer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .data {
          color: #11d075;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
    }
  }
  .answerAnalysis {
    background-color: #fff;
    margin-top: 12px;
    padding: 11px 16px 24px 16px;
    border-radius: 10px;
    .content {
      color: #676767;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 169.231% */
    }
  }
  .examAndSource {
    border-radius: 10px;
    background: #fff;
    height: 151px;
    width: 347px;
    margin-top: 12px;
    padding: 13px 37px 20px 15px;
    .exam {
      .con {
        display: flex;
        justify-content: space-between;
        .exam1 {
          margin-top: 4px;
          align-items: center;
          display: flex;
          .text {
            margin-left: 8px;
            color: #666666;
            font-size: 13px;
            font-weight: 400;
            word-wrap: break-word;
          }
        }
        .exam2 {
          align-items: center;
          display: flex;
          .text {
            margin-left: 8px;
            margin-right: 4px;
            color: #666666;
            font-size: 13px;
            font-weight: 400;
            word-wrap: break-word;
          }
        }
      }
    }
    .source {
      margin-top: 25px;
      .con {
        display: flex;
        margin-top: 4px;

        .text {
          margin-left: 8px;
          margin-right: 4px;
          color: #666666;
          font-size: 13px;
          font-weight: 400;
          word-wrap: break-word;
        }
      }
    }
  }
  .statute {
    width: 347px;
    height: 76px;
    border-radius: 10px;
    padding: 13px 0 16px 15px;
    background-color: #fff;
    margin-top: 12px;
    .text {
      margin-top: 8px;
      color: #666666;
      font-size: 13px;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
  .myNote {
    background-color: #fff;
    margin-top: 8px;
    padding-bottom: 16px;
    .top {
      height: 40px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      .edit {
        color: #11d075;
        font-size: 14px;
        font-weight: 500;
        word-wrap: break-word;
      }
    }
    .text {
      color: #666666;
      font-size: 13px;
      font-weight: 400;
      padding-left: 15px;
      word-wrap: break-word;
    }
  }
  .topicDiscussion {
    .top {
      background-color: rgb(248, 248, 248);
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .add {
        color: #11d075;
        font-size: 13px;
        font-weight: 400;
        word-wrap: break-word;
      }
    }
    .bottom {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-top: -10px;
    }
  }
  .longLine {
    width: 347px;
    height: 0;
    border: 1px #c7c7c7 dashed;
    margin: 15px 0 20px 0;
  }
  .topicAnswer {
    .top {
      background-color: rgb(248, 248, 248);
      display: flex;
      justify-content: space-between;
      margin-top: -20px;
      .add {
        color: #11d075;
        font-size: 13px;
        font-weight: 400;
        word-wrap: break-word;
      }
    }
    .bottom {
      color: #999999;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-top: -10px;
    }
  }
}
.noteAndCol {
  background-color: #677e6a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 130px;
  height: 47px;
  position: fixed;
  bottom: 100px;
  right: 20px;
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
      margin-right: 18px;
    }

    .text2 {
      color: white;
      font-size: 10px;
      font-weight: 500;
      margin-left: 18px;
    }
  }
}
</style>
