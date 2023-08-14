<!--
微信开放标签
服务号订阅通知按钮：wx-open-subscribe
https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#23
-->

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useConfigStore } from '@/stores'

defineProps<{
  id?: string
}>()

const emit = defineEmits<{
  (event: 'success', detail: any): void
  (event: 'fail', detail: any): void
}>()

const configStore = useConfigStore()
const templateIds = computed(() => {
  return configStore.$state.subscribeTemplateList.map(item => item.templateId).join(',')
})

onMounted(() => {
  const $btn = document.getElementById('subscribe-btn') as HTMLDivElement
  $btn.addEventListener('success', (event: any) => {
    // eslint-disable-next-line no-console
    console.log('success', event.detail)
    emit('success', event.detail)
  })
  $btn.addEventListener('error', (event: any) => {
    // eslint-disable-next-line no-console
    console.log('fail', event.detail)
    emit('fail', event.detail)
  })
})
</script>

<template>
  <!-- eslint-disable -->
  <wx-open-subscribe id="subscribe-btn" :template="templateIds">
    <script slot="style" type="text/wxtag-template">
      <style>
      .subscribe-btn {
        display: block;
        width: 74px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: white;
        text-align: center;
        border: 0;
        border-radius: 999px;
        background: linear-gradient(90deg, #FF6E0F 0%, #FF5970 100%);
      }
      </style>
    </script>
    <script type="text/wxtag-template">
      <button class="subscribe-btn">
        去订阅
      </button>
    </script>
  </wx-open-subscribe>
</template>
