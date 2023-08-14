import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import VueRouter from 'vue-router'
import 'uno.css'
import '@/libs/flexible'
import PortalVue from 'portal-vue'
import VConsole from 'vconsole'
import router from '@/router'
import App from '@/App.vue'
import { disableAdjustFontSize } from '@/wechat'

Vue.config.productionTip = false

// Pinia
const pinia = createPinia()
Vue.use(PiniaVuePlugin)

// Router
Vue.use(VueRouter)

// Portal
Vue.use(PortalVue)

try {
  disableAdjustFontSize()
}
catch {}

if (import.meta.env.MODE !== 'production') {
  // TODO: Sentry
  // eslint-disable-next-line no-new
  new VConsole()
}

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
