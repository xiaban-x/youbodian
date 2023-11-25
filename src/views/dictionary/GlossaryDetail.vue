<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import BilingualExample from '@/components/dictionary/BilingualExample.vue'

var time = '' // 用来存上一次按键时间；
setTimeout(() => {
  // 监听返回按钮
  document.addEventListener('plusready', function () {
    plus.key.addEventListener(
      'backbutton',
      function (evt) {
        var webview = plus.webview.currentWebview()
        var url = location.hash.split('/')[1]
        if (url === 'index') {
          // 处于首页时,实现退出app操作
          // vant.Toast('提示');
          if (new Date() - time < 2000) {
            // 小于2s,退出程序
            webview.close()
          } else {
            // 重置时间，
            time = new Date()
            vant.Toast('再次点击退出', 2000)
          }
          return
        } else {
          vant.Toast('不满足条件')
          history.go(-1) // 不满足退出操作，，返回上一页
        }
      },
      false
    )
  })
}, 10)
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="GDNav"
    title="四级词汇"
  ></van-nav-bar>
  <div class="GDContainer">
    <select class="subSelect" name="subject" id="subject">
      <option value="默认排序">默认排序</option>
      <option value="难度排序">难度排序</option>
      <option value="常用排序">常用排序</option>
    </select>
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
    <div class="noteAndCol">
      <div class="noteAndColCon1" @click="router.push('/listenWord')">
        <div class="img">
          <img
            src="@/assets/dictionary/listenWord.png"
            style="width: 17px; height: 17px; margin-right: 10px"
            alt="听单词"
          />
        </div>
        <div class="text1">听单词</div>
      </div>
      <div class="centered-element">
        <img src="@/assets/dictionary/VerticalPole.svg" alt="竖杆" />
      </div>
      <div class="noteAndColCon2">
        <div class="img">
          <img
            src="@/assets/dictionary/hiddenMeaning.png"
            style="width: 16px; height: 14px"
            alt="隐藏释义"
          />
        </div>
        <div class="text2">隐藏释义</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GDContainer {
  background-color: #fff;
  padding-top: 7px;
  padding-left: 14px;
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

  .longLine {
    width: 375px;
    margin-left: -14px;
    border: 1px #c3c3c3 solid;
    margin-top: 13px;
    margin-bottom: 12px;
  }
  .noteAndCol {
    background-color: #677e6a;
    display: flex;
    justify-content: space-between; /* 两边距离相等 */
    align-items: center;
    border-radius: 30px;
    width: 150px;
    height: 47px;
    position: fixed;
    bottom: 60px; /* 距离底部的距离 */
    right: 20px; /* 距离右侧的距离 */
    word-wrap: break-word;
    .centered-element {
      display: flex;
      justify-content: center;
    }
    .noteAndColCon1 {
      display: flex;
      flex-direction: column;
      justify-content: center; /* 两边距离相等 */
      align-items: center;
      flex-grow: 1;
      margin-left: 15px;
      .text1 {
        color: white;
        font-size: 10px;
        font-weight: 500;
        margin-right: 8px;
      }
    }
    .noteAndColCon2 {
      display: flex;
      flex-direction: column;
      justify-content: center; /* 两边距离相等 */
      align-items: center;
      flex-grow: 1;
      margin-right: 15px;
      .text2 {
        color: white;
        font-size: 10px;
        font-weight: 500;
        margin-left: 8px;
      }
    }
  }
}
</style>
