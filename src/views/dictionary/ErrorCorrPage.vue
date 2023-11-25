<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import BtnGreen from '@/components/BtnGreen.vue'
const router = useRouter()
const fileList = ref([
  // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
])

const afterRead = (file) => {
  file.status = 'uploading'
  file.message = '上传中...'

  setTimeout(() => {
    // file.status = 'failed'
    // file.message = '上传失败'

    file.status = 'done'
    file.message = '上传成功'
  }, 1000)
}
import { onMounted, onBeforeUnmount } from 'vue'
</script>
<template>
  <van-nav-bar
    left-arrow
    @click-left="router.go(-1)"
    class="SBTDNav"
    title="纠错"
  ></van-nav-bar>
  <div class="ECContainer">
    <form>
      <textarea
        class="errorInfo"
        id="longText"
        name="longText"
        rows="7"
        cols="44"
        placeholder="请填写纠错内容"
      ></textarea>
      <van-uploader v-model="fileList" :after-read="afterRead" multiple />
      <div class="PicInfo">截图信息</div>
    </form>
    <BtnGreen message="立即反馈" @click="router.go(-1)"></BtnGreen>
  </div>
</template>

<style scoped>
.ECContainer {
  padding-left: 14px;
  background-color: #fff;
  .errorInfo {
    background-color: rgb(248, 248, 248);
    border: none;
    padding: 9px;
    font-size: 14px;
    font-weight: 300;
    word-wrap: break-word;
    margin-bottom: 10px;
  }
  .PicInfo {
    color: #292929;
    font-size: 12px;
    font-weight: 300;
    word-wrap: break-word;
    margin-left: 15px;
  }
}
</style>
