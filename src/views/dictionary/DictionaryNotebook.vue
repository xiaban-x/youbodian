<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="NBNav"
    title="笔记本"
  ></van-nav-bar>
  <div class="NBContainer">
    <div class="topCon">
      <div>
        <select class="subSelect" name="subject" id="subject">
          <option value="四级单词">四级单词</option>
          <option value="六级单词">六级单词</option>
          <option value="专业六级">专业六级</option>
        </select>
        <select class="subSelect" name="subject" id="subject">
          <option value="默认排序">默认排序</option>
          <option value="难度排序">难度排序</option>
          <option value="常用排序">常用排序</option>
        </select>
      </div>
      <div>
        <span class="add" @click="router.push('/editNotebook')">新增</span>
        <span class="del">删除</span>
      </div>
    </div>
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
  width: 375px;
  background-color: #fff;
  padding-top: 7px;
  padding-left: 14px;
  .topCon {
    justify-content: space-between;
    align-items: center;
    display: flex;
    .subSelect {
      background-color: #f6f6f6;
      color: #292929;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 94px;
      height: 30px;
      border: 1px #f6f6f6 solid;
      border-radius: 30px;
      padding-left: 10px;
      margin-right: 11px;
    }
    .del {
      position: relative;
      color: #11d075;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 15px;
    }
    .add {
      position: relative;
      color: #11d075;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 15px;
    }
  }

  .longLine {
    width: 375px;
    margin-left: -14px;
    border: 1px #dadada solid;
    margin-top: 13px;
    margin-bottom: 12px;
  }
}
</style>
