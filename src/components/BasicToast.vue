<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useToastStore } from '@/stores'

const { message } = storeToRefs(useToastStore())

const messages = computed(() => {
  return message.value.split(/\\n/)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="message" class="app-toast text-center">
      <p v-for="m in messages" :key="m">
        {{ m }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.app-toast {
  padding: 0.5rem 1rem;
  color: white;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
