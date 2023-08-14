/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export function disableAdjustFontSize() {
  if (
    typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function'
  ) {
    onBridgeReady()
  }
  else {
    if (document.addEventListener) {
      document.addEventListener(
        'WeixinJSBridgeReady',
        onBridgeReady,
        false,
      )
    }
    else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  }

  function onBridgeReady() {
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
    WeixinJSBridge.on('menu:setfont', () => {
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
    })
  }
}

/**
 * Wrap WeixinJSBridge for 微信支付
 */
export async function $chooseWXPay(payload: object) {
  return new Promise((resolve, reject) => {
    function onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          ...payload,
        },
        (result: any) => {
          console.log(result)
          if (result.err_msg === 'get_brand_wcpay_request:ok') {
          // 使用以上方式判断前端返回,微信团队郑重提示：
          // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            resolve(result)
          }
          else {
            reject(result)
          }
        })
    }

    if (typeof WeixinJSBridge == 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
      }
      else if ((document as any).attachEvent) {
        ;(document as any).attachEvent('WeixinJSBridgeReady', onBridgeReady)
        ;(document as any).attachEvent('onWeixinJSBridgeReady', onBridgeReady)
      }
    }
    else {
      onBridgeReady()
    }
  })
}
