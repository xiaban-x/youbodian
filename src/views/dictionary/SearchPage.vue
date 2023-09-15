<script setup>
import search from '@/assets/dictionary/SearchGreen.svg'
import { useRouter } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'

const router = useRouter()
const icon = {
  search
}

// 创建一个 ref 来标记是否显示 selectLanguage
const showSelectLanguage = ref(false)
const inputValue = ref('')
const inputRef = ref(null)
// 在页面加载后自动聚焦到输入框
onMounted(() => {
  nextTick(() => {
    inputRef.value.focus()
    showSelectLanguage.value = false // 默认显示 selectLanguage
  })
})

let timer
const handleInput = (event) => {
  inputValue.value = event.target.value.trim()

  // 清除之前的定时器
  clearTimeout(timer)

  // 设置一个新的定时器，在一秒后检查输入框的值
  timer = setTimeout(() => {
    showSelectLanguage.value = inputValue.value !== ''
  }, 1000)
}

const E2C = () => {
  router.push('searchByTrans')
}
const C2E = () => {
  router.push('searchByTrans')
}
</script>

<template>
  <van-nav-bar left-arrow @click-left="router.go(-1)" title="词典查询翻译" />
  <div class="SearchContainer" @click="router.push('/search')">
    <img class="search" :src="icon.search" alt="搜索" />
    <input
      class="inp"
      maxlength="50"
      placeholder="请输入关键字进行查询"
      type="text"
      v-model="inputValue"
      @input="handleInput"
      ref="inputRef"
    />
  </div>
  <!-- 显示 selectLanguage 的条件是 showSelectLanguage 为 true -->
  <div class="selectLanguage" v-if="showSelectLanguage">
    <div @click="E2C">英转中</div>
    <div><img src="@/assets/dictionary/Line.svg" alt="横线" /></div>
    <div @click="C2E">中转英</div>
  </div>
</template>

<style scoped>
.SearchContainer {
  width: 347px;
  height: 50px;
  background: white;
  border-radius: 7px;
  border: 0.25px #dadada solid;
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-top: 13px;
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
    margin-left: 12.5px;
    margin-right: 60px;
    width: 196px;
  }
}
.selectLanguage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  height: auto;
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding-bottom: 12px;
  padding-top: 12px;
  margin-left: 100px;
}
</style>
