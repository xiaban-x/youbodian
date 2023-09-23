<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="EENav"
    title="错词本"
  ></van-nav-bar>
  <div class="EEContainer">
    <select class="subSelect" name="subject" id="subject">
      <option value="默认排序">默认排序</option>
      <option value="难度排序">难度排序</option>
      <option value="常用排序">常用排序</option>
    </select>
    <span class="add" @click="router.push('/learnGlossaryPage')">去复习</span>
    <span class="del">删除</span>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
    <BilingualExample class="BEx" @click="router.push('/searchByTransDetail')">
      <template #header> misdeed</template>
      <template #main> n. 字典，词典；专业词典；术语大全。</template>
    </BilingualExample>
    <div class="longLine"></div>
  </div>
</template>

<style scoped>
.EEContainer {
  background-color: #fff;
  padding-left: 14px;

  .subSelect {
    margin-top: 14px;
    margin-bottom: 14px;
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
  }
  .del {
    position: relative;
    left: 165px;
    color: #11d075;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .add {
    position: relative;
    left: 150px;
    color: #11d075;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .BEx {
    padding-bottom: 13px;
  }
  .longLine {
    width: 375px;
    margin-left: -14px;
    border: 1px #dadada solid;
    margin-bottom: 12px;
  }
}
</style>
