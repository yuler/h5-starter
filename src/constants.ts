export const APP_MAX_BODY_WIDTH = 750

// Storage flags
export const STORAGE_UUID = 'UUID'
export const STORAGE_TOKEN = 'TOKEN'

// UserAgent
const ua = navigator.userAgent
export const isIOS = /(ios|ipad|iphone)/i.test(ua) || (ua.includes('macintosh') && 'ontouchend' in document)
export const isAndroid = /android/i.test(ua)
export const isSogou = /sogoumse|sogoumobilebrowser/i.test(ua)
export const isWechat = /micromessenger/i.test(ua)
export const isQQ = /qq\//i.test(ua)
export const isWeibo = /weibo/i.test(ua)
export const isSafari
  = ua.includes('Safari')
  && !ua.includes('Chrome')
  && !ua.includes('Sogou')
  && !ua.includes('CriOS')
  && !ua.includes('QQBrowser')
  && !ua.includes('FingerBrowser')
  && !/firefox|iceweasel|fxios/i.test(ua)
