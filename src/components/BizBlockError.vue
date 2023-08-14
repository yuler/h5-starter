<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '服务器错误',
  },
)
</script>

<template>
  <div class="py-20 w-50 mx-a">
    <p class="mt-14px text-center text-#666 text-13px">
      {{ title }}
    </p>
  </div>
</template>
