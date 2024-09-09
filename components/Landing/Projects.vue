<script setup lang="ts">
interface Project {
  title: string
  description?: string
  imageUrl: string
  class: string
}

const projects: Project[] = [
  {
    title: 'Sidestream Labs',
    imageUrl: '/projects/labs.png',
    class: 'bg-green-200/25 border-green-200'
  },
  {
    title: 'PixelTranslate',
    imageUrl: '/projects/pixeltranslate.png',
    class: 'bg-orange-200/25 border-orange-200'
  },
  {
    title: 'Rechnungsradar',
    imageUrl: '/projects/rechnungsradar.png',
    class: 'bg-blue-200/25 border-blue-200'
  },
  {
    title: 'sidebase.io',
    imageUrl: '/projects/sidebase.png',
    class: 'bg-pink-200/25 border-pink-200'
  },
]
</script>

<template>
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <BackgroundBlobLilac class="absolute bottom-48 -right-10 h-96 w-96" />
    <BackgroundBlobGreen class="absolute top-2 left-96 h-96 w-96" />
    <BackgroundBlobPink class="absolute bottom-0 -left-14 h-96 w-96" />

    <div class="relative">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Work
      </h2>
      <p class="max-w-2xl mt-2 text-lg leading-8 text-gray-600">
        Have a look at some of my previous projects!
      </p>
    </div>

    <div class="relative mt-8 grid grid-cols-1 gap-10 items-start lg:grid-cols-2">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group relative min-h-[350px] p-4 rounded-lg overflow-hidden border-2 backdrop-blur-md"
        :class="project.class"
      >
        <img
          :src="project.imageUrl"
          alt=""
          class="absolute h-[350px] w-full top-20 left-10 group-hover:scale-105 transition-all duration-500 z-10"
        >

        <div class="relative flex flex-col items-start justify-between z-10">
          <div class="px-4 pb-4 mt-4 space-y-3">
            <h3 class="text-2xl font-semibold">
              {{ project.title }}
            </h3>
            <p v-if="project.description" class="line-clamp-3 text-sm leading-6 text-gray-600">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
