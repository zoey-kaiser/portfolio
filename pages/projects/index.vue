<template>
  <div class="relative overflow-hidden">
    <BackgroundBlobLilac class="absolute top-24 lg:-left-48 w-32 h-32 lg:h-96 lg:w-96" />
    <BackgroundBlobGreen class="absolute top-60 right-0 md:right-10 lg:right-96 w-32 h-32 lg:h-96 lg:w-96" />
    <BackgroundBlobPink class="absolute rotate-90 top-10 lg:-top-32 right-0 lg:-right-20 w-32 h-32 lg:h-96 lg:w-96" />

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
          <NuxtLink v-for="project in list" :key="project._path" :to="project._path" class="relative">
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-pastel-green via-pastel-lilac-800 to-pastel-pink" />
            <div class="relative bg-white p-5 rounded-lg m-1 shadow">
              <h1 class="text-2xl font-medium">
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
