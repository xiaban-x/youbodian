<script setup>
import { ref } from 'vue'
import router from '@/router'

const value = ref(50)
const isShow = ref(false)

const calendar = ref(null)

const themeColor = ref({
  'main-color': '#11D075'
})

const DayOfWeek = ref()
const Month = ref()
const day = ref()
const year = ref()
const lastMonth = () => {
  calendar.value.lastMonth()
}
const nextMonth = () => {
  calendar.value.nextMonth()
}

const today = () => {
  calendar.value.today()
  console.log(calendar.value)
}

const onChange = (dateString) => {
  const date = new Date(dateString)

  // 星期和月份的英文和中文映射
  const dayOfWeekMap = {
    Sun: '星期日',
    Mon: '星期一',
    Tue: '星期二',
    Wed: '星期三',
    Thu: '星期四',
    Fri: '星期五',
    Sat: '星期六'
  }

  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  // 提取日期的部分并转为中文
  DayOfWeek.value = dayOfWeekMap[date.toString().split(' ')[0]]
  Month.value = monthMap[date.toString().split(' ')[1]]
  day.value = date.getDate()
  if (parseInt(day) < 10) {
    day.value = '0' + day.value.toString()
  }
  year.value = date.getFullYear()
}
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="LDNav"
    title="学习日历"
  ></van-nav-bar>
  <div class="LDContainer">
    <vue-hash-calendar
      ref="calendar"
      @change="onChange"
      style="background-color: #94ffcb; border-radius: 10px"
      :theme-color="themeColor"
    >
      <template v-slot:day="scope">
        <div v-if="scope?.extendAttr?.isToday">今</div>
        <div v-else>{{ scope?.date?.day }}</div>
      </template>
      <template #action>
        <div class="dateCon">
          <div class="left">
            <span class="yearAndMonth">{{ year }}.{{ Month }}</span>
            <img
              @click="lastMonth"
              src="@/assets/dictionary/DateBack.png"
              alt="上一月"
              style="width: 22px; height: 22px; margin: 0 6px 0 10px"
            />
            <img
              @click="nextMonth"
              src="@/assets/dictionary/DateNext.png"
              alt="下一月"
              style="width: 22px; height: 22px"
            />
          </div>
          <div>
            <span class="backToday" @click="today">返回今日</span>
            <span class="setGoal" @click="router.push('/globalSetting')"
              >设置学习目标</span
            >
          </div>
        </div>
      </template>
    </vue-hash-calendar>
    <div class="yearAndMonthDay">{{ year }}.{{ Month }}.{{ day }}</div>
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
  </div>
</template>

<style scoped>
.LDContainer {
  height: 650px;
  margin-left: 14px;
  margin-right: 14px;
  .dateCon {
    margin-top: 27px;
    margin-bottom: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 347px;
    .left {
      display: flex;
      align-items: flex-end;
      .yearAndMonth {
        color: #292929;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    .backToday {
      color: #11d075;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .setGoal {
      margin-left: 14px;
      color: #11d075;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .yearAndMonthDay {
    margin-top: 30px;
    color: #292929;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
}
</style>
