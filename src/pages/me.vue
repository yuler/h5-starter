<script lang="ts" setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <div>
    <div class="cover px-30px py-27px flex items-center justify-between">
      Member
    </div>

    <BasicTabbar />
  </div>
</template>
