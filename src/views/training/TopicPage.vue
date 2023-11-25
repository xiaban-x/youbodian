<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import router from '@/router'
import { ref } from 'vue'
import Btn167 from '@/components/Btn167.vue'

const topicTitle = ref('下列关于会计基础的表述，不正确的是（）。')
const topicOptions = ref([
  'A.在会计分期的前提下，会计确认、计量和 报告应该以企业持续、正常的生产经营活动 为前提',
  'B.在会计分期的前提下，会计确认、计量',
  'C.持续经营确定了会计核算的空间范围',
  'D.会计分期确立了会计核算的时间范围'
])

// 使用 ref 来管理选中的选项
const selectedOption = ref(null)

// 题目类型，0是单选，1是多选，2是判断
const topicClass = ref('0')
// 点击选项时触发的方法
const selectOption = (index) => {
  // 取消先前选择的选项的背景
  if (selectedOption.value !== null) {
    selectedOption.value = null
  }

  // 设置新选择的选项的背景为绿色
  selectedOption.value = index

  // 获取选项的内容
  const selectedContent = topicOptions.value[index]
  console.log(`选择的选项内容：${selectedContent}`)

  // 改变父级 topicOptions 的样式类
  const parentElement = document.querySelector(`.option${index}`)
  if (parentElement) {
    parentElement.classList.add('parentSelected')
  }
}

//填空题的使用场景
const usage = ref('加工取得存货')
//填空题标题
const gapFillingTitle = ref(
  'ABC公司2×20年9月初开始加工生产一批商品，领 用直接材料账面价值为300万元，发生直接人工成本 200万元，银行存款支付生产车间水电费100万元。 发生相关成本支出时：'
)
//填空题问题
const fillAsk = ref(
  '借：______——直接材料 300\n ——直接人工 200\n ______ 100\n 贷：原材料 300\n 应付职工薪酬 200\n 银行存款 100\n 2×20年9月末，该批产品加工完成，应分摊 至该批产品的制造费用为50万元。借：生产 成本——制造费用 50 贷：制造费用 50\n 该批产品成本=直接材料+直接人工+应分摊 至该批产品的制造费用=300+200+50=550 （万元）\n 借：______ 550\n 贷：生产成本——直接材料 300\n ——直接人工 200\n ——制造费用 50'
)

//判断题标题
const judgeTitle = ref(
  '企业在资产负债表日对尚未获得全部信息的交易或 事项不应进行会计处理。'
)
const nextTopic = () => {
  topicClass.value = '1'
}
// 在这里可以根据业务逻辑切换到下一题，例如：
// 如果还有下一题，可以根据题目类型切换到下一题的数据
// 如果没有下一题了，可以跳转到答题结果页面或其他页面
// 这里的逻辑需要根据你的具体需求来实现
import { onMounted, onBeforeUnmount } from 'vue'
</script>

<template>
  <div class="TPContainer">
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
          src="@/assets/training/Share.png"
          style="width: 27px; height: 27px"
          alt="分享"
          @click="router.push('/topicShare')"
        />
        <div class="timeCon">
          <img
            src="@/assets/training/Time.png"
            style="width: 27px; height: 27px"
            alt="时间"
          />
          <span class="spendTime">06:15</span>
        </div>
        <img
          src="@/assets/training/Collected.png"
          style="width: 27px; height: 27px"
          alt="收藏"
        />
        <img
          src="@/assets/training/Date.png"
          style="width: 27px; height: 27px"
          alt="答题卡"
          @click="router.push('/answerSheet')"
        />
      </div>
    </div>
    <div v-if="topicClass === '0'" class="selectContainer">
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
          :class="{ parentSelected: selectedOption === index }"
        >
          <!-- 添加 @click 事件来触发选项的选择 -->
          <div
            @click="selectOption(index)"
            :class="{ selected: selectedOption === index }"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <!-- 下一题按钮，根据题目类型切换到不同题目 -->
      <BtnGreen message="下一题" @click="nextTopic" />
    </div>
    <div v-else-if="topicClass === '1'" class="gapFillingContainer">
      <div class="title">
        <div class="topicCount">填空题1/30</div>
        <div class="topicNum">题号：5113232154</div>
      </div>
      <div class="topicMain">
        <div class="usageScenario">【使用场景：{{ usage }}】</div>
        <div class="topicTitle">{{ gapFillingTitle }}</div>
        <div class="fillAsk">{{ fillAsk }}</div>
      </div>
      <div class="fillAnswer">
        <input
          @click="topicClass = '2'"
          class="fillAnswerText"
          type="text"
          placeholder="输入第一空的答案"
        />
      </div>
    </div>
    <div v-else class="judgeContainer">
      <div class="title">
        <div class="topicCount">判断1/30</div>
        <div class="topicNum">题号：5113232154</div>
      </div>
      <div class="topicMain">
        <div class="topicTitle">{{ judgeTitle }}</div>
      </div>
      <Btn167
        message="说法错误"
        background-color="#FF5C5C"
        @click="router.push('/answerSheet')"
      ></Btn167>
      <Btn167
        message="说法正确"
        style="margin-left: 13px"
        @click="router.push('/answerSheet')"
      ></Btn167>
    </div>
  </div>
</template>

<style scoped>
.TPContainer {
  width: 375px;
  padding: 21px 14px 40px;
  background: linear-gradient(180deg, #42e496 0%, rgba(231, 255, 243, 0) 100%);
  .top {
    display: flex;
    justify-content: space-between;
    .goPre {
      color: #fff;
      font-size: 24px;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      width: 135px;
      margin-right: 12px;
      .timeCon {
        display: flex;
        flex-direction: column;
        .spendTime {
          color: #fff;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 10px;
    .topicCount {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .topicNum {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .selectContainer {
    .topicMain {
      width: 347px;
      border-radius: 10px;
      background: #fff;
      padding-bottom: 38px;
      margin-bottom: 126px;

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
        .selected {
          background-color: #f0fff8; /* 选中的选项背景颜色为绿色 */
          color: #11d075;
        }
      }
      .parentSelected {
        background-color: #f0fff8;
      }
    }
  }
  .gapFillingContainer {
    margin-top: 10px;
    .topicMain {
      background-color: #fff;
      border-radius: 10px;
      padding: 20px 14px 33px 15px;
      .usageScenario {
        color: #333;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .topicTitle {
        color: #333;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .fillAsk {
        width: 300px;
        white-space: pre-line;
        background-color: #f9f9f9;
        border-radius: 5px;
        padding: 13px 13px 19px 17px;
        margin-top: 12px;
        color: #292929;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .fillAnswer {
      border-radius: 5px;
      background: #fff;
      backdrop-filter: blur(2px);
      margin-top: 20px;
      margin-bottom: 20px;
      width: 347px;
      height: 45px;
      .fillAnswerText {
        border-radius: 5px;
        background: #fff;
        backdrop-filter: blur(2px);
        width: 347px;
        height: 45px;
        border: 1px #fff solid;
        padding: 10px 0 11px 22px;
      }
    }
  }
  .judgeContainer {
    padding-bottom: 60px;
    .topicMain {
      height: 213px;
      background-color: #fff;
      padding: 20px 24px 20px 15px;
      border-radius: 10px;
      color: #333;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 250px;
    }
  }
}
</style>
