<template>
  <div>
    <Head>修改昵称</Head>
    <div class="changing-nickname">
      <input class="new-nickname" maxlength="11" placeholder="我的城市没有海" type="text" />
    </div>
    <div class="change-buttom">
      <BtnGreen message="确认修改"></BtnGreen>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.changing-nickname .new-nickname {
  width: 375px;
  height: 42px;
  background: white;
  border: 0;
  padding-left: 10px;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}
.changing-nickname input::placeholder {
  color: #292929;
}
.change-buttom {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>