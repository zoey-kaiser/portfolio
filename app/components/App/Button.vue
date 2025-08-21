<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'

type ButtonType = 'primary' | 'inverse'
const props = withDefaults(defineProps<{ type?: ButtonType, solid?: boolean }>(), { type: 'primary', solid: true })

const baseButtonStyle = 'cursor-pointer shadow-sm px-5 py-2 inline-block rounded'
const buttonTypesSolid: Record<ButtonType, string> = {
  primary: 'bg-pastel-lilac-800 hover:bg-pastel-lilac-700 text-pastel-lilac-100 hover:text-white',
  inverse: 'bg-gray-700 hover:bg-gray-600 text-blue-100 hover:text-white',
}

const buttonTypesOutline: Record<ButtonType, string> = {
  primary: 'border-pastel-lilac-800 hover:border-pastel-lilac-900 text-pastel-lilac-800 hover:text-pastel-lilac-900',
  inverse: 'border-gray-700 hover:border-gray-800 text-gray-700 hover:text-gray-800',
}

const buttonClass = computed(() => {
  const classesToApply: string[] = [baseButtonStyle]
  if (props.solid) {
    classesToApply.push(buttonTypesSolid[props.type])
  }
  else {
    classesToApply.push('border', buttonTypesOutline[props.type])
  }

  return classesToApply
})
</script>

<template>
  <button :class="twMerge(...buttonClass)">
    <slot />
  </button>
</template>
