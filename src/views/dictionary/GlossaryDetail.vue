<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const value1 = ref(0)
const option1 = [
  { text: '默认排序', value: 0 },
  { text: '难度排序', value: 1 },
  { text: '常用排序', value: 2 }
]
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="GDNav"
    title="四级词汇"
  ></van-nav-bar>
  <div class="GDContainer">
    <van-dropdown-menu class="dropdown">
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx">
      <template #header> I looked it up in the dictionary.</template>
      <template #main> 我在词典里查过这个词。</template>
    </BilingualExample>
    <div class="longLine"></div>
  </div>
</template>

<style scoped>
.GDContainer {
  background-color: #fff;
  padding-top: 7px;
  padding-left: 14px;
  .dropdown {
    width: 94px;
    height: 30px;
    background-color: #f6f6f6;
    border-radius: 30px;
    margin-bottom: 30px;
  }

  .longLine {
    width: 375px;
    margin-left: -14px;
    border: 0.25px #c3c3c3 solid;
    margin-top: 13px;
    margin-bottom: 12px;
  }
}
</style>
