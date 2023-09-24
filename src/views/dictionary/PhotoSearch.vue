<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
// canvas控件对象
const canvasDom = ref(null)
// video 控件对象
const videoDom = ref(null)
// 照片路径
const imgurl = ref(null)

let IsShow = ref(true)
const openCamera = () => {
  // 检测浏览器是否支持mediaDevices
  if (navigator.mediaDevices) {
    navigator.mediaDevices
      // 开启视频，关闭音频
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        // 将视频流传入viedo控件
        videoDom.value.srcObject = stream
        // 播放
        videoDom.value.play()
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    window.alert('该浏览器不支持开启摄像头，请更换最新版浏览器')
  }
}

// 拍照
const takePhoto = () => {
  // 如果已经拍照了就重新启动摄像头
  if (imgurl.value) {
    imgurl.value = null
    openCamera()
    return
  }
  IsShow.value = !IsShow.value
  // 设置画布大小与摄像大小一致
  canvasDom.value.width = videoDom.value.videoWidth
  canvasDom.value.height = videoDom.value.videoHeight
  // 执行画的操作
  canvasDom.value.getContext('2d').drawImage(videoDom.value, 0, 0)
  // 将结果转换为可展示的格式
  imgurl.value = canvasDom.value.toDataURL('image/webp')
  // 关闭摄像头
  stop()
}

// 关闭摄像头
const stop = () => {
  let stream = videoDom.value.srcObject
  if (!stream) return
  let tracks = stream.getTracks()
  tracks.forEach((x) => {
    x.stop()
  })
}

// 打开摄像头
onMounted(() => {
  openCamera()
})
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
    <div class="main">
      <!-- 画笔控件 用来拍照 -->
      <canvas style="display: none" ref="canvasDom" />
      <!-- 播放器，用来播放拍摄的视频 -->
      <div class="takingCon" v-if="!imgurl">
        <div class="camera_videoCon">
          <video class="camera_video" ref="videoDom" />
        </div>
        <div class="taking">
          <div class="takingAndButton">
            <div class="photoAlbum">
              <img
                src="@/assets/images/photoAlbum.png"
                style="height: 38px; width: 38px"
                alt="相册"
              />
            </div>
            <div>
              <div class="title">拍照</div>

              <div class="takePhoto">
                <div class="btn" @click="takePhoto">
                  <!--                  {{ imgurl ? '重拍' : '拍照' }}-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  显示照片  -->
      <div v-else>
        <div class="showImage">
          <img style="width: 100%" :src="imgurl" />
        </div>
        <div class="taking">
          <div class="takingAndButton">
            <div class="photoAlbum">
              <img
                src="@/assets/images/photoAlbum.png"
                style="height: 38px; width: 38px"
                alt="相册"
              />
            </div>
            <div>
              <div class="title">拍照</div>

              <div class="takePhoto">
                <div class="btn" @click="takePhoto">
                  <!--                  {{ imgurl ? '重拍' : '拍照' }}-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
