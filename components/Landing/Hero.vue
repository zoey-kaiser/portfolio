<script lang="ts" setup>
const { social } = useAppConfig()
</script>

<template>
  <div class="relative flex items-center justify-between">
    <BackgroundBlobLilac class="absolute -top-48 -left-52 h-96 w-96" />
    <BackgroundBlobGreen class="absolute rotate-180 -top-48 -right-44 h-96 w-96" />
    <BackgroundBlobPink class="absolute rotate-90 top-60 left-60 h-96 w-96" />

    <div class="relative grow">
      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Hi, I am Zoey!
      </h1>
      <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        I'm a developer who thrives on creating superb user interfaces and experiences,
        ensuring my code reaches the highest standards while adeptly building and maintaining full-
        stack applications.
      </p>

      <div class="flex items-center gap-2">
        <AppButton
          data-cal-link="zoeykaiser/sidebase"
          data-cal-namespace="sidebase"
          :data-cal-config="{ layout: 'month_view' }"
        >
          Schedule a meeting
        </AppButton>
        <NuxtLink :to="`mailto:${social.email}`">
          <AppButton :solid="false">
            Send me a mail
          </AppButton>
        </NuxtLink>
      </div>
    </div>

    <div class="hidden lg:mt-0 lg:col-span-4 lg:flex">
      <div class="relative">
        <div class="absolute top-5 left-5 h-full w-full bg-pastel-lilac rounded-lg" />
        <div class="absolute top-3 left-3 h-full w-full bg-pastel-pink rounded-lg" />
        <img
          src="/profile.png"
          alt="profile picture"
          class="relative h-80 w-80 object-cover rounded-lg border-2 border-black"
        >
      </div>
    </div>
  </div>
</template>
