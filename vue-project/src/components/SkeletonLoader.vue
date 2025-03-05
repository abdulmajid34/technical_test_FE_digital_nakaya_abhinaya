<template>
  <div class="skeleton-loader" :style="{ height: height }">
    <div class="skeleton-animation"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '100px',
  },
})
</script>

<style scoped>
.skeleton-loader {
  background: #e9ecef;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.skeleton-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
