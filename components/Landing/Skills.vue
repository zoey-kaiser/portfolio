<script lang="ts" setup>
interface SkillItem {
  title: string
  description: string
  icon: string
}
const skills: SkillItem[] = [
  {
    title: 'Design',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`,
    icon: 'mingcute:paint-brush-ai-line'
  },
  {
    title: 'Development',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`,
    icon: 'mingcute:code-line'
  },
  {
    title: 'Open Source',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`,
    icon: 'mingcute:github-line'
  },
  {
    title: 'Speaking',
    description: `Need an amazing design that fits your brand and looks good? Let's talk about your vision!`,
    icon: 'mingcute:microphone-line'
  }
]
</script>

<template>
  <div class="Page grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
    <AppCard v-for="skill in skills" :key="skill.title">
      <h1 class="flex items-center gap-2 text-2xl">
        <Icon :name="skill.icon" />
        {{ skill.title }}
      </h1>
      <p class="mt-1 text-sm">
        {{ skill.description }}
      </p>
    </AppCard>
  </div>
</template>
