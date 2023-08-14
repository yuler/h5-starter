<script lang="ts" setup>
import { watch } from 'vue'

const props = withDefaults(defineProps<{
  value: boolean
  mask?: boolean
}>(), {
  mask: true,
})

const emit = defineEmits<{
  (event: 'input', value: boolean): void
  (event: 'open'): void
  (event: 'close'): void
}>()

// TODO:
watch(() => props.value, (value) => {
  value ? emit('open') : emit('close')
})
</script>

<template>
  <!-- TODO: portal this component -->
  <div to="root">
    <transition name="fade">
      <div
        v-if="value && mask" class="fixed inset-0 bg-black opacity-80 z-50"
        @click="emit('input', false)"
      />
    </transition>
    <transition name="slide">
      <div v-if="value" class="w-full fixed bottom-0 left-0 z-50">
        <div class="w-full sticky bottom-0">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
