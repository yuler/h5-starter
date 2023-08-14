<script lang="ts" setup>
withDefaults(
  defineProps<{
    value: boolean
    closeable?: boolean
  }>(),
  {
    closeable: true,
  },
)
const emit = defineEmits<{
  (event: 'input', value: boolean): void
}>()

function onClose() {
  emit('input', false)
}
</script>

<template>
  <portal to="root">
    <transition name="fade">
      <div v-if="value" class="fixed inset-0 z-99">
        <div class="fixed inset-0 bg-#000000B2" />
        <div class="w-270px bg-white rounded-5px absolute top-1/2 left-1/2 -translate-1/2 z-100">
          <div v-if="closeable" class="absolute right-0 -top-58px" @click="onClose">
            <i-icon-park-outline-close-one class="w-7 h-7 text-white" />
          </div>
          <slot />
        </div>
      </div>
    </transition>
  </portal>
</template>
