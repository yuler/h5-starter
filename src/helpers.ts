/**
 * 一些业务相关的 helper 函数, 所有函数都以 `$` 开头
 */

import { v4 as uuid } from 'uuid'
import { STORAGE_TOKEN, STORAGE_UUID } from '@/constants'

export function $uuid() {
  let id = window.localStorage.getItem(STORAGE_UUID)
  if (id)
    return id

  id = uuid()
  window.localStorage.setItem(STORAGE_UUID, id)
  return id
}

export function $getToken() {
  return window.localStorage.getItem(STORAGE_TOKEN)
}
export function $setToken(token: string) {
  window.localStorage.setItem(STORAGE_TOKEN, token)
}
export function $removeToken() {
  window.localStorage.removeItem(STORAGE_TOKEN)
}
export function $isLogin() {
  return Boolean($getToken())
}
