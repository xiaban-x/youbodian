import http from '@/utils/http'

//发送邮箱/手机确认码
export const userSendVerityCodeService = (
  captchaType,
  captchaId,
  captchaToken,
  dest,
  destType
) =>
  http.post('https://ybd.freecourse.vip/user/send-verity-code', {
    captchaType,
    captchaId,
    captchaToken,
    dest,
    destType
  })

// 获取图形认证码接口
export const getCaptchaService = () =>
  http.get('https://ybd.freecourse.vip/user/get-captcha')

// 用户登录接口
export const userLoginService = (username, code, password) =>
  http.post('https://ybd.freecourse.vip/user/login', {
    username: username,
    code: code,
    password: password
  })

export const getUserInfoService = (customHeaders) =>
  http.get('https://ybd.freecourse.vip/user/get', null, {
    Authorization: customHeaders
  })
export const updateUserInfoService = (
  gender,
  displayName,
  avatar,
  location,
  email,
  phone,
  education,
  wechat,
  headers
) =>
  http.post(
    'https://ybd.freecourse.vip/user/update',
    {
      gender,
      displayName,
      avatar,
      location,
      email,
      phone,
      education,
      wechat
    },
    {
      Authorization: headers
    }
  )
export const resetUserPasswordService = (oldPassword, newPassword, headers) =>
  http.post(
    'https://ybd.freecourse.vip/user/reset',
    {
      oldPassword,
      newPassword
    },
    {
      Authorization: headers
    }
  )
