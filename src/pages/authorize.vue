<!--
- 自动授权页面, 接受三方(如: App) 跳转到此页面
- 通过 `code` 获取 `token` 后, 重定向到 `redirect` 指定的页面上
-->

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router/composables'
import { api } from '@/api'
import { useUserStore } from '@/stores'

const props = defineProps<{
  code?: string
  state?: string
  redirect?: string
}>()

const userStore = useUserStore()
const router = useRouter()
const error = ref<any>()
const loading = ref(true)

onMounted(async () => {
  if (!props.code) {
    error.value = '缺少 code 参数'
    return
  }

  let state: Record<string, string> = {}
  try {
    state = JSON.parse(props.state ?? '')
  }
  catch {}

  // wx.login -> code
  const { data } = await api.post<any, any>('/xxx', {
    code: props.code,
  })

  await userStore.login(data.token)

  router.push({ path: props.redirect || '/' })
})
</script>

<template>
  <div class="w-screen h-screen bg-white">
    <div v-if="error" class="h-full flex flex-row items-center justify-center">
      {{ error }}
    </div>
    <div v-else-if="loading" class="h-full flex flex-row items-center justify-center">
      授权中...
    </div>
    <div v-else>
      Ooops...
    </div>
  </div>
</template>
