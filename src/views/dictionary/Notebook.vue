<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '四级单词', value: 0 },
  { text: '六级单词', value: 1 },
  { text: '专业六级', value: 2 }
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '难度排序', value: 'b' },
  { text: '常用排序', value: 'c' }
]
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="NBNav"
    title="笔记本"
  ></van-nav-bar>
  <div class="NBContainer">
    <van-dropdown-menu class="dropdown">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <span class="add" @click="router.push('/editNotebook')">新增</span>
    <span class="del">删除</span>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
  </div>
</template>

<style scoped>
.NBContainer {
  background-color: #fff;
  padding-top: 7px;
  padding-left: 14px;
  .dropdown {
    width: 219px;
    height: 30px;
    background-color: #f6f6f6;
    border-radius: 30px;
  }
  .del {
    position: relative;
    top: -10px;
    left: 290px;
    color: #11d075;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .add {
    position: relative;
    top: -10px;
    left: 280px;
    color: #11d075;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .longLine {
    width: 375px;
    margin-left: -14px;
    border: 0.25px #dadada solid;
    margin-top: 13px;
    margin-bottom: 12px;
  }
}
</style>
