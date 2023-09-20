<script setup>

</script>

<template>
  <div>
    <div class="bgcGreen">
      <Head>版本信息</Head>
<!--logo及版本-->
      <div class="logo">
        <img src="@/assets/images/youbodian4.png"/>
        <div class="version">V3.0.102</div>
      </div>
<!-- 版本更新-->
      <table>
        <tr>
          <td class="left-align">版本更新</td>
          <td class="right-align" @click="router.push('changeTel')"> ></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.bgcGreen {
  width: 375px;
  height: 356px;
  background: linear-gradient(180deg, #F1FFF8 0%, rgba(213.56, 255, 235.11, 0) 100%)
}

/*logo及版本*/
.logo{
  display: flex;
  margin: 48px auto;
  flex-direction: column;
}
.logo img {
  display: flex;
  width: 100px;
  height: 67px;
  margin: 0 auto ;
}

.version {
  display: flex;
  margin: 18px auto;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
  margin: 18px auto;
}

/*版本更新*/
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 11.5px;
  background-color: white;
}

td {
  padding: 14px;
}

.left-align {
  text-align: left;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}

.right-align {
  text-align: right;
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}

/* 设置表格横边框，去掉竖边框 */
td {
  border-top: 0.50px #E8E8E8 solid;
  border-bottom: 0.50px #E8E8E8 solid;
  height: 55px;
}

</style>