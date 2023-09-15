<script setup>
import DicTranWord from '@/components/dictionary/DicTranWord.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import search from '@/assets/dictionary/SearchGreen.svg'
const icon = {
  search
}
const router = useRouter()
const inputValue = ref('')
const inputRef = ref(null)
</script>
<template>
  <van-nav-bar left-arrow @click-left="router.go(-1)" title="词典查询翻译" />
  <div class="SearchContainer">
    <div class="inpCon">
      <span class="search"><img :src="icon.search" alt="搜索" /></span>
      <span class="inpBorder"
        ><input
          class="inp"
          maxlength="50"
          placeholder="请输入关键字进行查询"
          type="text"
          v-model="inputValue"
          ref="inputRef"
        />
      </span>
    </div>
    <span class="cancel" @click="router.go(-1)">取消</span>
  </div>
  <div class="dictionaryTranslation">
    <DicTranWord @click="router.push('SearchByTransDetail')">
      <template #header> dict </template>
      <template #main> </template>
      <template #footer> abbr.词典，字典(dictionary) </template>
    </DicTranWord>
    <DicTranWord>
      <template #header> dict </template>
      <template #main></template>
      <template #footer> abbr.词典，字典(dictionary) </template>
    </DicTranWord>
    <DicTranWord>
      <template #header> dict </template>
      <template #main> </template>
      <template #footer> abbr.词典，字典(dictionary) </template>
    </DicTranWord>
    <DicTranWord>
      <template #header> dict </template>
      <template #main> </template>
      <template #footer>abbr. 词典，字典(dictionary) </template>
    </DicTranWord>
  </div>
</template>

<style scoped>
.SearchContainer {
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-top: 13px;
  .inpCon {
    background: white;
    border-radius: 7px;
    border: 0.25px #dadada solid;
    width: 302px;
    height: 42px;
    display: flex;
    align-items: center;
  }
  .inpBorder {
  }
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
    width: 156px;
  }
  .cancel {
    color: #11d075;
    font-size: 16px;
    font-weight: 400;
    word-wrap: break-word;
    width: 32px;
    margin-left: 13px;
  }
}
.dictionaryTranslation {
  width: 347px;
  height: auto;
  background: white;
  border-radius: 10px;
  border: 0.25px #e0e0e0 solid;
  margin-left: 14px;
  padding-top: 14px;
  padding-bottom: 8px;
  margin-top: 7px;
}
</style>
