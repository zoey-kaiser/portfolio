<script setup>
const posts = [
  {
    id: 1,
    title: 'Sidestream Labs',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
    imageUrl: '/projects/labs.png',
    class: 'bg-green-200/25 border-green-200'
  },
  {
    id: 1,
    title: 'PixelTranslate',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
    imageUrl: '/projects/pixeltranslate.png',
    class: 'bg-orange-200/25 border-orange-200'
  },
  {
    id: 1,
    title: 'Rechnungsradar',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
    imageUrl: '/projects/rechnungsradar.png',
    class: 'bg-blue-200/25 border-blue-200'
  },
  {
    id: 1,
    title: 'sidebase.io',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
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
        v-for="post in posts"
        :key="post.id"
        class="group relative min-h-[450px] p-4 rounded-lg overflow-hidden border-2 backdrop-blur-md"
        :class="post.class"
      >
        <img
          :src="post.imageUrl"
          alt=""
          class="absolute h-[350px] w-full top-44 left-10 group-hover:scale-105 transition-all duration-500 z-10"
        >

        <div class="relative flex flex-col items-start justify-between z-10">
          <div class="px-4 pb-4 mt-4 space-y-3">
            <h3 class="text-2xl font-semibold">
              {{ post.title }}
            </h3>
            <p class="line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
