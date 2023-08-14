import axios from 'axios'
import { $getToken } from '@/helpers'
import { isIOS } from '@/constants'

// import { useToastStore, useUserStore } from '@/stores'
// import router from '@/router'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN + import.meta.env.VITE_API_BASE,
  responseType: 'json',
})

api.interceptors.request.use((options) => {
  const token = $getToken()

  if (token)
    options.headers.Authorization = token

  options.params = {
    ...options.params,
    app_platform: isIOS ? 'ios' : 'android',
    app_version: __APP_VERSION__,
  }

  return options
})

api.interceptors.response.use((response) => {
  // 用户 token 过期
  // if (response.data.code === 401) {
  //   useToastStore().showToast('用户信息过期，请重新登录')
  //   useUserStore().logout()
  //   router.replace({
  //     name: 'login',
  //     query: { redirect: window.encodeURIComponent(router.currentRoute.fullPath) },
  //   })
  // }

  if (response.data.code !== 0)
    return Promise.reject(response.data)

  return response.data
})
