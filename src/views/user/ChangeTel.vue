<script setup></script>

<template>
  <div>
    <Head>修改手机号</Head>
    <table>
      <tr>
        <td class="left-align">
          <input
            class="new-tel"
            maxlength="11"
            placeholder="请输入新手机号码"
            type="text"
          />
        </td>
        <td class="right-align"></td>
      </tr>
      <tr>
        <td class="left-align">
          <input
            class="new-tel"
            maxlength="11"
            placeholder="请输入验证码"
            type="text"
          />
        </td>
        <td class="right-align">获取验证码</td>
      </tr>
    </table>
    <div class="change-button">
      <BtnGreen message="确认修改"></BtnGreen>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

td {
  padding: 0 10px;
}

.left-align {
  text-align: left;
  color: #292929;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
}
.left-align .new-tel {
  background: white;
  border: 0;
  padding-left: 10px;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}
.left-align .new-tel::placeholder {
  color: #999999;
}

.right-align {
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  padding-right: 18px;
  word-wrap: break-word;
  color: #11d074;
}

/* 设置表格横边框，去掉竖边框 */
td {
  border-bottom: 0.5px #e8e8e8 solid;
  height: 44px;
}

/* 去掉第一列的左边框 */
td:first-child {
  border-left: none;
}

/* 去掉最后一列的右边框 */
td:last-child {
  border-right: none;
}
.change-button {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
