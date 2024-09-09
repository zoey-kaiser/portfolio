<script lang="ts" setup>
const { social } = useAppConfig()
</script>

<template>
  <div class="fixed top-4 left-0 w-full z-50">
    <nav class="relative max-w-7xl mx-4 xl:mx-auto border bg-white py-4 px-6 rounded-lg shadow-sm">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <span class="font-playwrite text-2xl leading-9">
            Zoey
          </span>
        </NuxtLink>

        <div class="flex items-center gap-2">
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
