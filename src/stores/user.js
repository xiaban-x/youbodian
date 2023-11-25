import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    tokenType: null
  }),
  actions: {
    // 设置令牌
    setTokens(accessToken, refreshToken, tokenType) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken
      this.tokenType = tokenType
    },
    // 清除令牌
    clearTokens() {
      this.accessToken = null
      this.refreshToken = null
      this.tokenType = null
    }
  }
})

//用户模块
export const useUserStore = defineStore('userInfo', {
  state: () => ({
    gender: '',
    displayName: '',
    avatar: '',
    location: '',
    email: '',
    phone: '',
    education: '',
    wechat: ''
  }),
  actions: {
    // 设置用户信息
    setUserInfo(userInfo) {
      Object.assign(this, userInfo)
    },
    // 清除用户信息
    clearUserInfo() {
      Object.keys(this.$state).forEach((key) => {
        this[key] = ''
      })
    }
  }
})
