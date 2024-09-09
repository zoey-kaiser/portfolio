<template>
  <div class="group relative">
    <div class="absolute w-full h-full top-1 left-1 rounded-lg bg-black opacity-50 group-hover:opacity-100 transition-opacity" />

    <div class="relative bg-white p-6 rounded-lg border">
      <slot />
    </div>
  </div>
</template>
