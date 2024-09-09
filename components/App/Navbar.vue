<script lang="ts" setup>
const { social } = useAppConfig()
</script>

<template>
  <div class="fixed top-3 left-0 w-full z-50">
    <nav class="relative max-w-7xl mx-4 xl:mx-auto border bg-white py-4 px-6 rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <NuxtLink to="/">
            <span class="text-xl md:text-2xl font-playpen">
              Zoey Kaiser
            </span>
          </NuxtLink>

          <div class="hidden md:block border-l-2 h-8 w-2 border-lilac-800" />

          <div class="flex items-center gap-4 md:gap-6">
            <NuxtLink to="/" class="text-lg hover:text-pastel-lilac-800">
              Home
            </NuxtLink>
            <NuxtLink to="/projects" class="text-lg hover:text-pastel-lilac-800">
              Projects
            </NuxtLink>
            <NuxtLink to="/resume.pdf" target="_blank" class="text-lg hover:text-pastel-lilac-800">
              Resume
            </NuxtLink>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <NuxtLink :to="social.linkedIn" :external="true" target="_blank">
            <AppButton type="inverse" class="h-9 w-9 grid place-content-center">
              <Icon name="mingcute:linkedin-line" size="26" />
            </AppButton>
          </NuxtLink>
          <NuxtLink :to="social.twitter" :external="true" target="_blank">
            <AppButton type="inverse" class="h-9 w-9 grid place-content-center">
              <Icon name="mingcute:social-x-line" size="23" />
            </AppButton>
          </NuxtLink>
          <NuxtLink :to="social.github" :external="true" target="_blank">
            <AppButton type="inverse" class="h-9 w-9 grid place-content-center">
              <Icon name="mingcute:github-line" size="23" />
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
