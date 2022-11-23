<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    require: true,
    default: false,
  },
});
</script>

<template>
  <div v-if="props.isLoading" class="overlay">
    <div class="overlay__inner">
      <div class="overlay__content"><span class="spinner"></span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// SPIN
.overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: var(--white);
  z-index: 20;

  &__inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &__content {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.spinner {
  width: 75px;
  height: 75px;
  display: inline-block;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.05);
  border-top-color: var(--blue-04);
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
