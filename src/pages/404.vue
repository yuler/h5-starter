<script lang="ts" setup>
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  name: 'NotFound',
})
</script>

<template>
  <div
    h="screen" py="10"
    flex="~ col" justify="center" items="center"
  >
    <p mt="4" text="center">
      页面不存在
    </p>
    <router-link :to="{ name: 'home' }">
      <button
        class="button" btn="colorful"
        mt="8" w="156px" h="10" rounded="full"
        text="16px black center" font="bold"
      >
        去首页
      </button>
    </router-link>
  </div>
</template>
