<script lang="ts" setup>
const { social } = useAppConfig()
</script>

<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-4 md:order-2">
        <NuxtLink :to="social.linkedIn" :external="true" target="_blank">
          <AppButton type="inverse" class="h-9 w-9 grid place-content-center">
            <Icon name="mingcute:linkedin-line" size="20" />
          </AppButton>
        </NuxtLink>
        <NuxtLink :to="social.github" :external="true" target="_blank">
          <AppButton type="inverse" class="h-9 w-9 grid place-content-center">
            <Icon name="mingcute:github-line" size="20" />
          </AppButton>
        </NuxtLink>
      </div>
      <div class="mt-4 md:order-1 md:mt-0">
        <p class="text-center text-sm leading-5 text-gray-500">
          Zoey Kaiser - {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>
