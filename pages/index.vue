<script lang="ts" setup>
definePageMeta({
  documentDriven: false
})

useHead({
  title: 'Welcome'
})
</script>

<template>
  <div class="w-full h-full">
    <LandingHero class="pb-28" />
    <LandingSkills />
    <AppDivider class="my-20" />
    <LandingProjects />
    <AppDivider class="my-20" />
    <LandingTalks class="pb-20" />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
