<script lang="ts" setup>
const { contact } = useAppConfig()
</script>

<template>
  <div class="relative overflow-hidden">
    <BackgroundBlobLilac class="absolute top-24 lg:-left-48 w-32 h-32 lg:h-96 lg:w-96" />
    <BackgroundBlobGreen class="absolute top-60 right-0 md:right-10 lg:right-96 w-32 h-32 lg:h-96 lg:w-96" />
    <BackgroundBlobPink class="absolute rotate-90 top-10 lg:-top-32 right-0 lg:-right-20 w-32 h-32 lg:h-96 lg:w-96" />

    <div class="Page flex items-center justify-between pt-40">
      <div class="relative grow">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Hi, I am Zoey!
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
          I am a full stack developer based in Cologne. I like turning ideas into intuitive user experiences and building apps that grow and scale together with you and your users. On the side, I speak at events and support the Hamburg Vue.js meetup.
        </p>

        <div class="flex items-center gap-2">
          <AppButton :data-cal-link="contact.calLink" :data-cal-config="{ layout: 'month_view' }">
            Let's have a chat!
          </AppButton>
          <NuxtLink :to="`mailto:${contact.email}`">
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
            src="/profile.jpeg"
            alt="Picture of Zoey Kaiser"
            class="relative h-80 w-80 object-cover rounded-lg border-2 border-black"
          >
        </div>
      </div>
    </div>
  </div>
</template>
