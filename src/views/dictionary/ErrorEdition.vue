<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, reactive } from 'vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'
const value1 = ref(0)
const option1 = [
  { text: '时间倒序', value: 0 },
  { text: '时间顺序', value: 1 },
  { text: '错题数量顺序', value: 2 }
]

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = reactive({
  dropdownMenuBackground: '#F6F6F6',
  dropdownMenuHeight: '30px',
  dropdownMenuWidth: '60px',
  dropdownMenuTitleFontSize: '14px',
  dropdownMenuShadow: '5 2px 12px fade(var(--van-gray-7), 12)'
})
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="EENav"
    title="错词本"
  ></van-nav-bar>
  <div class="EEContainer">
    <van-config-provider :theme-vars="themeVars" class="dropdownCon">
      <van-dropdown-menu class="dropdown">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </van-config-provider>
    <span class="add" @click="router.push('/editNotebook')">去复习</span>
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
  .dropdownCon {
    border-radius: 15px;
    padding-top: 7px;
    .dropdown {
      width: 90px;
    }
  }
  .del {
    position: relative;
    top: -25px;
    left: 270px;
    color: #11d075;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .add {
    position: relative;
    top: -25px;
    left: 255px;
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
    border: 0.25px #dadada solid;
    margin-bottom: 12px;
  }
}
</style>
