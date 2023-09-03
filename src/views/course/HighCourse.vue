<script>
export default {
  data() {
    return {
      showbuy: false
    }
  },
  methods: {
    buy() {
      this.showbuy = !this.showbuy // 切换按钮的显示状态
    },
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  } 
  
}


</script>
<template>
  <div>
    <Head>高分一点通</Head>
    <div id="imageContainer">
      <div id="imageSlider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="sliderImage"
        /> -->
        <img src="src/assets/iamges/High-score.jpg" alt="" />
      </div>
      <div class="title-small">高分一点通</div>
      <div class="buy">
        <div class="main-text">集中突破，冲刺高分</div>
        <div class="price">￥400</div>
      </div>
    </div>

    <!-- 课程简介 -->
    <div class="introduce">
      <van-tabs
        v-model:active="active"
        class="order-tabs"
        line-height="2px"
        line-width="21px"
        color="#11D075"
        background="transparent"
      >
        <van-tab title="简介">
          <img
            style="
              width: 316px;
              height: 435px;
              background: linear-gradient(0deg, #d9d9d9 0%, #d9d9d9 100%);
              border-radius: 10px;
              margin: 25px 0 0 16px;
            "
            src="src/assets/iamges/introductory.jpg"
          />
          <div style="height: 15px"></div>
        </van-tab>
        <van-tab title="评价">
          <div class="all-evaluate">
            <Discussion></Discussion>
            <Discussion></Discussion>
            <Discussion></Discussion>
            <div style="height: 15px"></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 底部分享和按钮 -->
    <div class="share">
      <img src="src/assets/iamges/客服耳机 1.png" alt="" class="service" />
      <img src="src/assets/iamges/分享 1.png" alt="" class="sharelink" />
      <button @click="buy">
        <div class="buttontext">立即购买</div>
      </button>
    </div>

    <!-- 遮罩 -->
    <div id="shade">
      <div v-show="showbuy" class="black"></div>
      <div v-show="showbuy" class="top">
        <img src="src/assets/iamges/return.png" alt="" @click="goBack" />
      </div>
      <div v-show="showbuy" class="bottom">
        <div class="click">
          <div class="link">
            <img src="src/assets/iamges/picture.png" alt="" />
          </div>
          <div class="text">保存图片</div>
        </div>
        <div class="click">
          <div class="link">
            <img src="src/assets/iamges/link.png" alt="" />
          </div>
          <div class="text">链接</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#imageContainer {
  width: 347px;
  height: 247px;
  margin-top: 13px;
  background: white;
  border-radius: 10px;
  margin-left: 14px;
  overflow: hidden;
  position: relative;
}
#imageSlider {
  width: 347px;
  height: 175px;
  object-fit: cover;
  display: flex;
  transition: transform 0.3s ease-in-out;
}
.sliderImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title-small {
  color: #292929;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin: 11px 0 0 14px;
}
.buy .main-text {
  color: #666666;
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin: 5px 0 0 14px;
  float: left;
}
.buy .price {
  color: #ff5c5c;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  float: right;
  margin: 5px 19px 0 0;
}
.introduce {
  width: 347px;
  background: white;
  border-radius: 10px;
  margin-top: 8px;
  margin-left: 14px;
}

/* 底部分享和按钮 */
.share {
  position: fixed;
  bottom: 0px;
  width: 375px;
  height: 83px;
  background: white;
  overflow: hidden;
}
.share img {
  margin-top: 8px;
}
.share .service {
  margin-left: 16px;
}
.share .sharelink {
  margin-left: 12px;
}
.share button {
  width: 210px;
  height: 45px;
  background: #11d075;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  border: 0;
  margin: 4px 0 0 51px;
}
.share button .buttontext {
  color: #fff;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  float: left;
  padding: 0 73px;
}
/* 遮罩 */
template {
  position: relative;
}
.black {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.top {
  position: fixed;
  top: 0;
  width: 14px;
  height: 14px;
  padding: 25px 10px 10px 10px;
  /* background: white; */
}
.shade .top{
  line-height: normal;
  padding-top: 4px;
  z-index: 99;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 148px;
  background: white;
}
.bottom .click {
  margin: 13px 20px 0 22px;
  float: left;
}
.bottom .click .link {
  width: 50px;
  height: 50px;
  background: #11d075;
  border-radius: 10px;
  margin: 0 3px;
}
.bottom .click .link img {
  margin: 10px 0 0 9px;
}
.bottom .click .text {
  color: #292929;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 15px;
  text-align: center;
}
</style>
