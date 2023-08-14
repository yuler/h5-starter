<script lang="ts" setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { isDefined, rpx } from '@/utils'
import { APP_MAX_BODY_WIDTH } from '@/constants'

const props = withDefaults(defineProps<{
  left?: number
  right?: number
  bottom?: number
  width?: 'auto' | 'full'
}>(), {
  left: 0,
  right: 0,
  bottom: 0,
  width: 'full',
})

const { width } = useWindowSize()

// TODO: Refactor
const style = computed(() => {
  if (width.value < APP_MAX_BODY_WIDTH) {
    if (isDefined(props.left))
      return `${props.width === 'auto' ? 'width: auto' : 'width: 100%'};left: ${rpx(props.left)}px`

    if (isDefined(props.right))
      return `${props.width === 'auto' ? 'width: auto' : 'width: 100%'};right: ${rpx(props.right)}px`

    return ''
  }

  if (isDefined(props.left)) {
    return `
      ${props.width === 'auto' ? 'width: auto' : `width: ${APP_MAX_BODY_WIDTH}px`};
      left: calc((100vw - (${APP_MAX_BODY_WIDTH}px - ${rpx(props.left)}px))/2);
    `.trim()
  }
  if (isDefined(props.right)) {
    return `
      ${props.width === 'auto' ? 'width: auto' : `width: ${APP_MAX_BODY_WIDTH}px`};
      right: calc((100vw - (${APP_MAX_BODY_WIDTH}px - ${rpx(props.right)}px))/2)
    `.trim()
  }

  return `width: ${APP_MAX_BODY_WIDTH}px;calc((100vw - ${APP_MAX_BODY_WIDTH}PX)/2)`
})
</script>

<template>
  <div
    class="pb-5 fixed bottom-0 z-10 bg-white"
    :style="`bottom:${rpx(bottom ?? 0)}px;${style}`"
  >
    <slot />
  </div>
</template>
