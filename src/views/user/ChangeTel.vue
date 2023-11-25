<script setup>
import BtnGreen from '@/components/BtnGreen.vue'
import { ref } from 'vue'
import { getCaptchaService, userSendVerityCodeService } from '@/api/user'

let captchaValue = ref('')
let captchaId = ref('')
let captchaImage = ref('')

const getCaptcha = async () => {
  try {
    const response = await getCaptchaService()
    // 在这里处理响应数据，可以根据需要进行操作
    const data = response.data
    captchaId.value = data.captchaId
    captchaImage.value = data.captchaImage
    // 这里可以继续执行其他逻辑，使用响应的值
  } catch (error) {
    // 处理错误
    console.error('获取验证码失败：', error)
  }
}

let codeLoginDest = ref('')
let codeLoginCaptchaValue = ref('')
let dest = ref('')
let destType = ref('')
const getCode = async () => {
  try {
    console.log(codeLoginDest)
    console.log(codeLoginCaptchaValue)
    dest.value = codeLoginDest.value
    captchaValue.value = codeLoginCaptchaValue.value
    if (dest.value === null) {
      return '帐号为空'
    }
    if (dest.value.includes('@')) {
      destType.value = 'email'
    } else {
      destType.value = 'phone'
    }
    console.log(captchaId.value)
    console.log(captchaValue.value)
    console.log(dest.value)
    console.log(destType.value)
    const response = await userSendVerityCodeService(
      'Default',
      captchaId.value,
      captchaValue.value,
      dest.value,
      destType.value
    )
    // 在这里处理响应数据，可以根据需要进行操作
    const data = response.data
    // 这里可以继续执行其他逻辑，使用响应的值
    console.log(data)
  } catch (error) {
    // 处理错误
    console.error('获取验证码失败：', error)
  }
}
</script>

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
            placeholder="请输入图形验证码"
            type="text"
          />
          <img
            @click="getCaptcha"
            :src="'data:image/png;base64,' + captchaImage"
            style="height: 50px"
            alt="验证码"
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
            @click="getCode"
          />
          <span class="right-align">获取验证码</span>
        </td>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
