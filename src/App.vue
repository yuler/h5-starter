<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

import { onMounted, ref } from 'vue'
import { useUserStore } from './stores'
import BasicToast from '@/components/BasicToast.vue'
import BasicLoading from '@/components/BasicLoading.vue'

import { APP_MAX_BODY_WIDTH } from '@/constants'

const userStore = useUserStore()
// TODO: Move
const root = document.documentElement
root.style.setProperty('--var-max-body-width', `${APP_MAX_BODY_WIDTH}px`)

const loading = ref(true)
onMounted(async () => {
  // eslint-disable-next-line no-console
  console.log('[App] => onMounted')

  loading.value = false

  // TODO: wx.config?
  // try {
  //   const url = window.location.href
  //   const { data } = await api.post<any, any>('/xxx', { jsApiUrl: url })
  //   // TODO: Fallback
  //   wx.config({
  //     debug: false,
  //     appId: data.appId,
  //     timestamp: data.timestamp,
  //     nonceStr: data.nonceStr,
  //     signature: data.signature,
  //     jsApiList: [],
  //     openTagList: ['wx-open-subscribe'],
  //   })
  // }
  // catch (error) {
  //   console.warn(error)
  // }
})

// Network
</script>

<template>
  <div id="app">
    <!-- TODO: Loading -->
    <div v-if="loading" />

    <div v-else>
      <RouterView />

      <BasicLoading />
      <BasicToast z="1001" />
    </div>

    <portal-target name="root" />
  </div>
</template>

<style>
html, body {
  height: 100%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, SF UI Text, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
  touch-action: pan-y;
  font-size: 16px;
  max-width: var(--var-max-body-width, 750px);
  margin: 0 auto;
  background-color: white;
}
#app {
  min-height: 100%;
  margin: 0 auto;
  background: #F4F5F7;
  position: relative;
}

/** Some global transition  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/** Some reset css */
p {
  margin: 0;
}
div, input, textarea, button, select, a {
  -webkit-tap-highlight-color: transparent!important;
}
input:focus {
  outline: 0;
}
</style>
