<script setup>
import search from '@/assets/dictionary/search.svg'
import router from '@/router'
import { ref } from 'vue' // 引入Vue Composition API
import debounce from 'lodash/debounce' // 导入lodash的debounce函数
const icon = {
  search
}

const searchInput = ref('') // 用于存储输入的内容
const isShow = ref(false) // 用于确定是否输出结果
const handleInput = debounce(() => {
  // 当输入停止一秒后触发搜索
  // 在这里你可以实现搜索逻辑，例如向服务器发送请求并渲染数据
  const searchText = searchInput.value
  isShow.value = true
  console.log('Searching for:', searchText)
}, 1000)

const searchResult = ref([
  '下列关于会计基础的表述，不正确的是（）。',
  '不属于国家统一规定了计提基础和计提比例的是（）。',
  '下列资产中，期末账面价值与计税基础可能相等的有（）。'
])
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="STNav"
    title="搜索"
  ></van-nav-bar>
  <div class="STContainer">
    <div class="searchCon">
      <img class="search" :src="icon.search" alt="搜索" />
      <input
        class="inp"
        maxLength="20"
        placeholder="题目关键字"
        type="text"
        @input="handleInput"
        v-model="searchInput"
      />
    </div>
    <div class="searchResultCon" v-if="isShow">
      <div
        class="searchResult"
        v-for="(item, index) in searchResult"
        :key="index"
        @click="router.push('/topicPage')"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.STContainer {
  margin-left: 14px;
  .searchCon {
    width: 347px;
    height: 38px;
    background: white;
    border-radius: 7px;
    border: 0.5px #616161 solid;
    margin-top: 13px;
    display: flex;
    align-items: center;
    .search {
      margin-left: 14px;
    }
    .inp {
      border: none; /* Remove border */
      outline: none; /* Remove outline */
      color: #000;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
      margin-left: 16.5px;
      margin-right: 60px;
      width: 196px;
    }
  }
  .searchResultCon {
    border-radius: 10px;
    border: 0.5px solid #e0e0e0;
    background: #fff;
    width: 347px;
    padding-top: 7px;
    margin-top: 7px;
    .searchResult {
      padding-bottom: 10px;
      padding-left: 14px;
      padding-top: 7px;
      border-bottom: 0.5px solid #e0e0e0;
    }
  }
}
</style>
