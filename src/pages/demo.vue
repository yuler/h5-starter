<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { useRoute } from 'vue-router/composables'
import { useToastStore } from '@/stores'

const { $toast } = useToastStore()

const route = useRoute()
const code = route.query.code as string
const { copy } = useClipboard({ source: code as string, legacy: true })

async function onCopy() {
  await copy(code)
  $toast('复制成功')
}
</script>

<template>
  <div class="h-screen px-5 py-10 bg-white">
    <div>
      <p class="text-2xl font-bold">
        DEMO
      </p>
      <p class="mt-2 text-bluegray">
        授权测试
      </p>
    </div>

    <div>
      <textarea v-model="code" class="mt-4 w-full h-50 px-4 py-2 bg-#f8f8f8 rounded" disabled />
    </div>

    <div>
      <button
        class="mt-4 w-full px-4 py-2 text-white bg-black rounded"
        @click="onCopy"
      >
        复制
      </button>
    </div>
  </div>
</template>
