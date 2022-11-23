<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLoading } from "@/hooks/useLoading";
import Spin from "@/components/layouts/spin/Spin.vue";

const { isLoading } = useLoading();

</script>

<template>
  <Spin :isLoading="isLoading" />
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback> <Spin :isLoading="isLoading" /> </template>
  </Suspense>
</template>

<style lang="scss" scoped></style>
