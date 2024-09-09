<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'

type ButtonType = 'primary' | 'warning' | 'danger' | 'inverse' | 'success'
withDefaults(defineProps<{ type?: ButtonType }>(), { type: 'primary' })

const baseButtonStyle = 'cursor-pointer shadow-sm px-5 py-2 inline-block rounded'
const buttonTypes: Record<ButtonType, string> = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-blue-100 hover:text-white',
  warning: 'bg-orange-600 hover:bg-orange-500 text-orange-100 hover:text-white',
  danger: 'bg-red-600 hover:bg-red-500 text-orange-100 hover:text-white',
  inverse: 'bg-gray-700 hover:bg-gray-600 text-blue-100 hover:text-white',
  success: 'bg-teal-600 hover:bg-teal-500 text-teal-100 hover:text-white'
}
</script>

<template>
  <button :class="twMerge(baseButtonStyle, buttonTypes[type])">
    <slot />
  </button>
</template>
