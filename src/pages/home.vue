<script lang="ts" setup>
import { ref } from 'vue'

const infiniteRef = ref<HTMLElement>()
</script>

<template>
  <div ref="infiniteRef" class="h-screen overflow-y-scroll">
    <div class="px-15px pb-20">
      Home
    </div>

    <BasicTabbar />
  </div>
</template>
