<script lang="ts" setup>
const { socials } = useAppConfig()
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
            <NuxtLink :to="{ path: '/', hash: '#projects' }" class="text-lg hover:text-pastel-lilac-800">
              Projects
            </NuxtLink>
            <NuxtLink :to="{ path: '/', hash: '#talks' }" class="text-lg hover:text-pastel-lilac-800">
              Talks
            </NuxtLink>
            <NuxtLink to="/resume.pdf" target="_blank" class="text-lg hover:text-pastel-lilac-800">
              CV
            </NuxtLink>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-2">
          <NuxtLink
            v-for="social in socials"
            :key="social.href"
            :to="social.href"
            :external="true"
            target="_blank"
          >
            <AppButton
              :title="social.name"
              type="inverse"
              class="h-9 w-9 grid place-content-center"
            >
              <Icon :name="social.icon" size="24" />
            </AppButton>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
