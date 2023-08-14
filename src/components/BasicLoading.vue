<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '@/stores'

const { visible } = storeToRefs(useLoadingStore())

function noop() {}
</script>

<template>
  <Transition name="fade">
    <!-- Copy from https://loading.io/css -->
    <div
      v-if="visible" class="app-loading" z="1100"
      @touchmove.prevent="noop" @scroll.prevent="noop" @click.stop="noop"
    >
      <div class="app-loading__spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.app-loading {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.app-loading__spinner {
  color: white;
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1001;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}
.app-loading__spinner div {
  transform-origin: 20px 20px;
  animation: spinner 1.2s linear infinite;
}
.app-loading__spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 2px;
  left: 19px;
  width: 3px;
  height: 9px;
  border-radius: 20%;
  background: #fff;
}
.app-loading__spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.app-loading__spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.app-loading__spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.app-loading__spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.app-loading__spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.app-loading__spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.app-loading__spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.app-loading__spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.app-loading__spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.app-loading__spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.app-loading__spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.app-loading__spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
