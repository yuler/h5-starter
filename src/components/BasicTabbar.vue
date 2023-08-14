<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router/composables'

const route = useRoute()
const tab = ref<'home' | 'me'>(route.name as any)
</script>

<template>
  <BasicFixedBottom>
    <div class="flex w-full text-#86909C bg-white border-t border-t-solid border-t-#0000001A">
      <router-link
        :to="{ name: 'home' }" replace
        class="flex-1 text-center py-6px" :class="{ 'text-black font-bold': tab === 'home' }"
      >
        <i-assets-icon-tab-home-active v-if="tab === 'home'" class="mx-a w-6 h-6" />
        <i-assets-icon-tab-home v-else class="mx-a w-6 h-6 text-#4D4D4D" />
        <p class="mt-1 text-11px">
          首页
        </p>
      </router-link>
      <router-link
        :to="{ name: 'me' }" replace
        class="flex-1 text-center py-6px" :class="{ 'text-black font-bold': tab === 'me' }"
      >
        <i-assets-icon-tab-me-active v-if="tab === 'me'" class="mx-a w-6 h-6" />
        <i-assets-icon-tab-me v-else class="mx-a w-6 h-6 text-#4D4D4D" />
        <p class="mt-1 text-11px">
          我的
        </p>
      </router-link>
    </div>
  </BasicFixedBottom>
</template>
