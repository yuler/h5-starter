import { APP_MAX_BODY_WIDTH } from '@/constants'
import { clamp } from '@/utils'

// refs: https://github.com/amfe/lib-flexible
(function flexible(window, document) {
  const docEl = document.documentElement

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    const rem = clamp(docEl.clientWidth, 0, APP_MAX_BODY_WIDTH) / 10
    docEl.style.fontSize = `${rem}px`
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted)
      setRemUnit()
  })
}(window, document))
