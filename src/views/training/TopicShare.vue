<script setup>
import { ref } from 'vue'
import router from '@/router'

const topicTitle = ref('下列关于会计基础的表述，不正确的是（）。')
const topicOptions = ref([
  'A.在会计分期的前提下，会计确认、计量和 报告应该以企业持续、正常的生产经营活动 为前提',
  'B.在会计分期的前提下，会计确认、计量',
  'C.持续经营确定了会计核算的空间范围',
  'D.会计分期确立了会计核算的时间范围'
])
</script>

<template>
  <div class="TSContainer">
    <div class="top">
      <div class="goPre">
        <img
          src="@/assets/training/Back.png"
          style="width: 14px; height: 14px"
          alt="返回"
          @click="router.go(-1)"
        />
      </div>
      <div class="navTitle">分享</div>
    </div>
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
      <div>想知道答案吗？</div>
      <div class="downloadYBD">
        <span class="download">下载</span>
        <span class="YBD">优博典</span>
        <span class="searchWord">[会计]搜题号“6552641531”</span>
      </div>
      <div class="searchResult">
        <div class="searchTop">
          <div>会计</div>
          <img src="@/assets/dictionary/SelectProfession.svg" alt="行业" />
        </div>
        <div class="searchInp">
          <img class="search" src="@/assets/dictionary/search.svg" alt="搜索" />
          <span class="searchNum">6552641531</span>
        </div>
      </div>
      <div class="downloadApp">
        <span>下载APP</span>
        <img
          src="@/assets/training/logo.png"
          style="width: 37px; height: 25px; margin-left: 10px"
          alt="logo"
        />
      </div>
      <img
        src="@/assets/training/logo.png"
        style="width: 82px; height: 82px"
        alt="logo"
      />
    </div>
  </div>
  <div class="bottom">
    <div class="savePic">
      <div class="pic">
        <img
          src="@/assets/training/Picture.png"
          style="height: 31px; width: 31px"
          alt="保存图片"
        />
      </div>
      <div class="text">保存图片</div>
    </div>
    <div class="href">
      <div class="pic">
        <img
          src="@/assets/training/Href.png"
          style="height: 31px; width: 31px"
          alt="链接"
        />
      </div>
      <div class="text">链接</div>
    </div>
  </div>
</template>

<style scoped>
.TSContainer {
  padding-left: 14px;
  padding-right: 14px;
  width: 375px;
  padding-top: 21px;
  background: linear-gradient(180deg, #42e496 0%, rgba(231, 255, 243, 0) 100%);
  .top {
    display: flex;
    .goPre {
      color: #fff;
      font-size: 24px;
    }
    .navTitle {
      margin-left: 148px;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
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
  .topicMain {
    width: 347px;
    border-radius: 10px;
    background: #fff;
    padding-bottom: 38px;
    margin-bottom: 126px;
    padding-left: 15px;
    .topicTitle {
      padding-top: 20px;
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
      margin-left: 9px;
      padding: 13px 17px 13px 17px;
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .downloadYBD {
      margin-top: 5px;
      .download {
        color: #292929;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .YBD {
        color: #11d075;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .searchWord {
        color: #292929;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .searchResult {
      width: 319px;
      height: 99px;
      border-radius: 7px;
      border: 1px #e1e1e1 solid;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 12px;
      .searchTop {
        display: flex;
        justify-content: space-between;
        color: #292929;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-top: 10px;
      }
      .searchInp {
        width: 299px;
        height: 30px;
        border-radius: 3px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        padding-left: 19px;
        margin-top: 11px;
        .searchNum {
          color: #292929;
          font-size: 13px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          margin-left: 5px;
        }
      }
    }
    .downloadApp {
      margin-top: 18px;
      margin-bottom: 11px;
    }
  }
}
.bottom {
  width: 375px;
  height: 148px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding-left: 25px;
  display: flex;
  .savePic {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .pic {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: #11d075;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 6px;
    }
  }
  .href {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 46px;
    .pic {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: #11d075;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 6px;
    }
  }
}
</style>
