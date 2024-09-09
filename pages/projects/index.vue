<script lang="ts" setup>
definePageMeta({
  documentDriven: false
})

useHead({
  title: 'Projects'
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-[35vh] bg-pastel-lilac-100 overflow-hidden">
      <BackgroundBlobLilac class="hidden lg:block absolute top-20 -right-48 h-96 w-96" />
      <BackgroundBlobPink class="hidden lg:block absolute rotate-90 -top-32 -left-20 h-96 w-96" />
    </div>

    <div class="Page space-y-4 pt-32 min-h-[93vh]">
      <div class="relative">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Work
        </h2>
        <p class="max-w-2xl text-lg leading-8 text-gray-600">
          Have a look at some of my previous projects!
        </p>
      </div>

      <ContentList v-slot="{ list }" path="/projects">
        <div class="grid lg:grid-cols-3 gap-4 items-start">
          <NuxtLink v-for="project in list" :key="project._path" :to="project._path" class="group relative">
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-pastel-green via-pastel-lilac-800 to-pastel-pink" />
            <div class="relative bg-white p-5 rounded-lg m-1 shadow group-hover:shadow-lg transition-all">
              <h1 class="text-2xl font-medium group-hover:underline">
                {{ project.name }}
              </h1>

              <div class="flex flex-wrap items-center gap-1 mt-1">
                <div
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="bg-gray-700 pt-1 pb-0.5 px-3 text-xs rounded-lg text-white"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>
