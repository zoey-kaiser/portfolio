<script lang="ts" setup>
defineProps<{ padding?: string }>()
</script>

<template>
  <div class="group relative">
    <div class="absolute w-full h-full top-1 left-1 rounded-lg bg-black opacity-50 group-hover:opacity-100 transition-opacity" />

    <div
      class="relative bg-white rounded-lg border"
      :class="padding ?? 'p-6'"
    >
      <slot />
    </div>
  </div>
</template>
