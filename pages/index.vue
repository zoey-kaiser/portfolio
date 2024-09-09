<script lang="ts" setup>
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
