<script setup lang="ts">
interface Project {
  title: string
  imageUrl: string
  class: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Sidestream Labs',
    imageUrl: '/projects/labs/preview.png',
    class: 'bg-green-200/25 border-green-200',
    link: '/projects/labs',
  },
  {
    title: 'PixelTranslate',
    imageUrl: '/projects/pixeltranslate.png',
    class: 'bg-orange-200/25 border-orange-200',
    link: '/projects/pixeltranslate',
  },
  {
    title: 'Rechnungsradar',
    imageUrl: '/projects/rechnungsradar/preview.png',
    class: 'bg-blue-200/25 border-blue-200',
    link: '/projects/rechnungsradar',
  },
  {
    title: 'sidebase.io',
    imageUrl: '/projects/sidebase/preview.png',
    class: 'bg-pink-200/25 border-pink-200',
    link: '/projects/sidebase',
  },
]
</script>

<template>
  <div class="Page relative overflow-hidden">
    <BackgroundBlobLilac class="hidden md:block absolute bottom-48 -right-5 h-96 w-96" />
    <BackgroundBlobGreen class="hidden md:block absolute top-2 left-96 h-96 w-96" />
    <BackgroundBlobPink class="hidden md:block absolute bottom-0 -left-14 h-96 w-96" />

    <div class="relative">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Work
      </h2>
      <p class="max-w-2xl mt-2 text-lg leading-8 text-gray-600">
        Have a look at some of my previous projects!
      </p>
    </div>

    <div class="relative mt-8 grid grid-cols-1 gap-10 items-start lg:grid-cols-2">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.link"
      >
        <div
          class="group p-4 rounded-lg overflow-hidden border-2 backdrop-blur-md hover:shadow-xl transition-all duration-500"
          :class="project.class"
        >
          <div class="relative flex items-center justify-between z-10">
            <div class="px-4 mt-4 space-y-3">
              <h3 class="text-2xl font-semibold">
                {{ project.title }}
              </h3>
            </div>
            <AppButton type="inverse" :solid="false" class="hidden sm:block">
              Read more
            </AppButton>
          </div>

          <div class="relative min-h-[150px] sm:min-h-[250px]">
            <img
              :src="project.imageUrl"
              alt=""
              class="absolute h-full w-auto left-1/2 -translate-x-1/2 -bottom-16 group-hover:-bottom-10 scale-110 group-hover:scale-125 transition-all duration-500 z-10"
            >
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
