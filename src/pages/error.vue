<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router/composables'
import { useToastStore } from '@/stores'

const { $toast } = useToastStore()

const route = useRoute()
const error = ref('')
onMounted(() => {
  try {
    error.value = JSON.stringify(JSON.parse(route.query.error as string), null, 2)
  }
  catch {}
})

const { copy } = useClipboard({ source: error.value as string, legacy: true })
async function onCopy() {
  await copy(error.value)
  $toast('复制成功')
}
</script>

<template>
  <div class="mx-8 flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">
      Oops! 服务器错误!
    </h1>
    <p class="text-gray-500">
      😭) Please try again later.
    </p>

    <textarea
      class="mt-8 w-full h-60 px-4 py-2 bg-#f8f8f8 rounded"
      :value="error"
      disabled
    />

    <button
      class="mt-4 w-full px-4 py-2 text-white bg-black rounded"
      @click="onCopy"
    >
      复制
    </button>
  </div>
</template>
