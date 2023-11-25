<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { reactive } from 'vue'
import BilingualExample from '@/components/dictionary/BilingualExample.vue'

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = reactive({
  dropdownMenuBackground: '#F6F6F6',
  dropdownMenuHeight: '30px',
  dropdownMenuWidth: '60px',
  dropdownMenuTitleFontSize: '14px',
  dropdownMenuShadow: '5 2px 12px fade(var(--van-gray-7), 12)'
})
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="CENav"
    title="收藏本"
  ></van-nav-bar>
  <div class="CEContainer">
    <van-config-provider :theme-vars="themeVars" class="dropdownCon">
      <select class="subSelect" name="subject" id="subject">
        <option value="时间倒序">时间倒序</option>
        <option value="时间顺序">时间顺序</option>
        <option value="错题数量顺序">错题数量顺序</option>
      </select>
    </van-config-provider>
    <span class="del">取消收藏</span>
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
.CEContainer {
  background-color: #fff;
  padding-left: 14px;
  .dropdownCon {
    border-radius: 15px;
    padding-top: 12px;
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
    }
  }
  .del {
    position: relative;
    top: -30px;
    left: 270px;
    color: #11d075;
    font-size: 14px;
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
