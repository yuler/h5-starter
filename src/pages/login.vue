<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router/composables'
import { STORAGE_TOKEN } from '@/constants'

const token = ref('')

const router = useRouter()
function onLogin() {
  if (!token.value)
    // eslint-disable-next-line no-alert
    return window.alert('请输入 `token`')

  localStorage.setItem(STORAGE_TOKEN, token.value)
  router.replace({ name: 'home' })
}
</script>

<template>
  <div class="h-screen px-5 py-10 bg-white">
    <div>
      <p class="text-2xl font-bold">
        登录
      </p>
      <p class="mt-2 text-bluegray">
        仅非正式环境, 输入 `token` 模拟登录
      </p>
    </div>

    <div>
      <textarea
        v-model="token" class="mt-4 w-full h-50 px-4 py-2 bg-#f8f8f8 rounded"
        placeholder="复制 `token` 到此文本框"
      />
    </div>

    <div>
      <button
        class="mt-4 w-full px-4 py-2 text-white bg-black rounded"
        @click="onLogin"
      >
        登录
      </button>
    </div>
  </div>
</template>
