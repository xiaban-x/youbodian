<script setup>

</script>

<template>
  <div>
    <div class="bgcGreen">
      <Head>关于我们</Head>
      <!--logo及版本-->
      <div class="logo">
        <img src="@/assets/images/youbodian4.png"/>
        <div class="version">V3.0.102</div>
      </div>
      <!-- 介绍-->
      <p class="introduce">
        全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全
        球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介全球通简介。
      </p>
    </div>
  </div>
</template>

<style scoped>

.bgcGreen {
  width: 375px;
  height: 356px;
  background: linear-gradient(180deg, #F1FFF8 0%, rgba(213.56, 255, 235.11, 0) 100%)
}
Head{
  background-color: transparent;
}
/*logo及版本*/
.logo {
  display: flex;
  margin: 48px auto;
  flex-direction: column;
}

.logo img {
  display: flex;
  width: 100px;
  height: 67px;
  margin: 0 auto;
}

.version {
  display: flex;
  margin: 18px auto;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}

.introduce {
  width: 347px;
  height: 303px;
  background: white;
  margin: 0 auto;
  padding: 10px 14px;
}

p {
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  word-wrap: break-word;
  text-align: justify;
}
</style>