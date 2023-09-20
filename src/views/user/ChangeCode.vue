<script setup></script>

<template>
  <div>
    <Head>重置密码</Head>
    <div class="change-code">
      <van-tabs
        v-model:active="active"
        class="order-tabs"
        line-height="2px"
        line-width="30px"
        color="#11D075"
        background="transparent"
      >
        <van-tab title="简介">
          <table>
            <tr>
              <td class="left-align">
                <div class="number">112255648</div>
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
            <tr>
              <td class="left-align">
                <input
                  class="new-tel"
                  maxlength="11"
                  placeholder="请输入新的登录密码"
                  type="text"
                />
              </td>
              <td class="right-align">隐藏</td>
            </tr>
          </table>
          <div class="change-buttom">
            <BtnGreen message="确认重置"></BtnGreen>
          </div>
        </van-tab>

        <van-tab title="评价">
          <table>
            <tr>
              <td class="left-align">
                <div class="number">112255648@qq.com</div>
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
            <tr>
              <td class="left-align">
                <input
                  class="new-tel"
                  maxlength="11"
                  placeholder="请输入新的登录密码"
                  type="text"
                />
              </td>
              <td class="right-align">获取验证码</td>
            </tr>
          </table>
          <div class="change-buttom">
            <BtnGreen message="确认重置"></BtnGreen>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  margin-top: 20px;
}

td {
  padding: 0 10px;
}
td .number {
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
  color: black;
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
  border-bottom: none;
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
.change-buttom {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
