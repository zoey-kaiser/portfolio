<script lang="ts" setup>
interface SkillItem {
  title: string
  description: string
}
const skills: SkillItem[] = [
  {
    title: 'Design',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`
  },
  {
    title: 'Development',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`
  },
  {
    title: 'Open Source',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`
  },
  {
    title: 'Speaking',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`
  }
]
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <AppCard v-for="skill in skills" :key="skill.title">
      <h1 class="text-2xl">
        {{ skill.title }}
      </h1>
      <p class="mt-1 text-sm">
        {{ skill.description }}
      </p>
    </AppCard>
  </div>
</template>
