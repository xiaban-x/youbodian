<script setup>

</script>

<template>
  <div class="main">
    <Head>邀请注册</Head>
    <div class="logo">
      <img src="@/assets/images/youbodian4.png"/>
    </div>

    <!--  填写邀请语-->
    <textarea name="message" placeholder="快来填写你的邀请语吧!"></textarea>
    <!--  底部保存图片和分享链接-->
    <div class="bottom">
      <div class="click">
        <div class="link">
          <img src="@/assets/images/picture.png" alt=""/>
        </div>
        <div class="text">保存图片</div>
      </div>
      <div class="click">
        <div class="link">
          <img src="@/assets/images/link.png" alt=""/>
        </div>
        <div class="text">链接</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.logo img {
  display: flex;
  width: 100px;
  height: 67px;
  margin: 56px auto;
}

/*文本域格式*/
textarea {
  display: flex;
  width: 347px;
  height: 320px;
  margin: 0 auto;
  padding: 10px 14px;
  background: white;
  border-radius: 10px;
  border: 0.50px #EBEBEB solid;
  resize: none;
}

textarea::placeholder {
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}

/*底部保存图片和分享链接*/
.main {
  position: relative;
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

  font-weight: 400;
  word-wrap: break-word;
  margin-top: 15px;
  text-align: center;
}
</style>