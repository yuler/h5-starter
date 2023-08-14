<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '内容不存在',
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
