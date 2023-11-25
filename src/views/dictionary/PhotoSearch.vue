<script setup>
import { ref } from 'vue'
import router from '@/router'

const imgSrc = ref('') //展示的图片路径
let tupianlist = ref('') //展示的图片容器

// 从相册中选取图片
const galleryImg = () => {
  let This = this
  console.log('从相册中选择图片:')
  plus.gallery.pick(function (path) {
    This.imgSrc = path //path 是本地路径
    let img = new Image()
    img.src = path
    img.onload = function (path) {
      var that = img
      var w = that.width, //320
        h = that.height, //426
        scale = w / h
      w = 320 || w
      h = w / scale
      var canvas = document.createElement('canvas')
      canvas.width = 300 //这个设置不能丢，否者会成为canvas默认的300*150的大小
      canvas.height = 300 //这个设置不能丢，否者会成为canvas默认的300*150的大小
      var ctx = canvas.getContext('2d')
      ctx.drawImage(that, 0, 0, 300, 300)
      var base64 = canvas.toDataURL(
        'image/png',
        'image/jpeg',
        'image/jpg',
        1 || 0.8
      )
      tupianlist.value = base64
      // console.log(This.tupianlist + "我是转码后的base");

      //这里可以请求接口
    }
  })
}

// 拍照
const captureImage = () => {
  let This = this
  var cmr = plus.camera.getCamera() //获取摄像头管理对象
  var res = cmr.supportedImageResolutions[0] //字符串数组，摄像头支持的拍照分辨率
  var fmt = cmr.supportedImageFormats[0] //字符串数组，摄像头支持的拍照文件格式
  // console.log("拍照分辨率: " + res + ", 拍照文件格式: " + fmt);
  cmr.captureImage(
    function (path) {
      plus.gallery.save(path, (params) => {
        let file = params.file
        //编码为base64
        var img = new Image()
        img.src = file
        img.onload = function () {
          var that = img
          var w = that.width,
            h = that.height,
            scale = w / h
          w = 320 || w
          h = w / scale
          var canvas = document.createElement('canvas')
          canvas.width = 300 //这个设置不能丢，否者会成为canvas默认的300*150的大小
          canvas.height = 300 //这个设置不能丢，否者会成为canvas默认的300*150的大小
          var ctx = canvas.getContext('2d')
          ctx.drawImage(that, 0, 0, 300, 300)
          var base64 = canvas.toDataURL(
            'image/png',
            'image/jpeg',
            'image/jpg',
            1 || 0.8
          )
          // console.log(base64);
          tupianlist.value = base64
          //这里可以请求接口
        }
      })
      //进行拍照操作
      // 通过URL参数获取目录对象或文件对象
      plus.io.resolveLocalFileSystemURL(path, function (entry) {
        var tmpPath = entry.toLocalURL() //获取目录路径转换为本地路径URL地址
        This.imgSrc = tmpPath
        alert('拍摄成功: ' + tmpPath)
      })
    },
    function (error) {
      //捕获图像失败回调
      alert('捕获图像失败: ' + error.message)
    },
    { resolution: res, format: fmt }
  )
  this.show1 = false
}
</script>
<template>
  <div class="page">
    <van-nav-bar
      v-show="IsShow"
      left-arrow
      @click-left="router.go(-1)"
      class="PSNav"
      title="英译中"
    >
    </van-nav-bar>
    <van-nav-bar
      v-show="!IsShow"
      left-arrow
      @click-left="router.go(-1)"
      class="PSNav"
      title="英译中"
      right-text="重拍"
      @click-right="router.go(0)"
    >
    </van-nav-bar>
    //要显示的图片
    <div class="imgBox name">
      <img :src="imgSrc" />
    </div>
    <van-action-sheet v-model="show1">
      <ul>
        <li class="paizhao" @click="captureImage()">拍照</li>
        <li class="paizhao" @click="galleryImg()">从相册选择</li>
        <li class="paizhao" @click="quxiao()">取消</li>
      </ul>
    </van-action-sheet>
  </div>
</template>

<style scoped>
.page {
  height: 665px;
  width: 375px;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  .main {
    .takingCon {
      display: flex;
      flex-direction: column;
    }
    .taking {
      position: fixed;
      bottom: 0;
      width: 375px;
      height: 175px;
      background: #141414;
      .takingAndButton {
        display: flex;
        align-items: center;
        .photoAlbum {
          height: 38px;
          width: 38px;
          margin-top: 40px;
          margin-right: 58px;
          margin-left: 62px;
        }
        .title {
          color: white;
          font-size: 16px;
          font-weight: 500;
          text-align: center; /* 水平居中文本 */
          word-wrap: break-word;
          margin-top: 16px;
        }

        .takePhoto {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          margin-top: 4px;
          border: 2px white solid;
          .btn {
            width: 59px;
            height: 59px;
            margin-left: 3px;
            margin-top: 3px;
            background: #333333;
            border-radius: 50%;
          }
        }
      }
    }
  }
}

.camera_videoCon {
  position: fixed;
  top: 46px;
  width: 375px;
  height: 100%;
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px black solid;
  .camera_video {
    width: 375px;
  }
}
.showImage {
  position: fixed;
  width: 375px;
  height: 100%;
  background-color: #3d3d3d;
  border: 2px black solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
.PSNav {
  position: fixed;
  width: 100%;
}
</style>
