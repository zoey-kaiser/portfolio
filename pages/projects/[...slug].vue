<script lang="ts" setup>
import { DialogPanel } from '@headlessui/vue'

const { page: project } = useContent()
const isPreviewOpen = ref(false)
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="absolute top-0 left-0 w-full h-[35vh] bg-pastel-lilac-100 overflow-hidden"
      :class="{ 'h-[35vh]': project, 'h-full': !project }"
    >
      <BackgroundBlobLilac class="hidden lg:block absolute top-20 -right-48 h-96 w-96" />
      <BackgroundBlobPink class="hidden lg:block absolute rotate-90 -top-32 -left-20 h-96 w-96" />
    </div>

    <NotFound v-if="!project" class="relative min-h-[93vh] pt-32" />
    <main v-else class="Page relative pt-32 min-h-[93vh]">
      <div class="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div class="space-y-2">
          <h1 class="text-4xl font-bold">
            <NuxtLink to="/projects" class="text-pastel-lilac-800 hover:underline">
              Projects
            </NuxtLink>
            /
            {{ project.name }}
          </h1>

          <div class="flex items-center gap-2">
            <div
              v-for="(tag, index) in project.tags"
              :key="index"
              class="bg-gray-700 pt-1 pb-0.5 px-3 text-sm rounded-lg text-white"
            >
              {{ tag }}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <AppButton v-if="project.fullPreview" @click="isPreviewOpen = true">
            Preview
          </AppButton>
          <NuxtLink v-if="project.github" :to="project.github" :external="true" target="_blank">
            <AppButton :solid="false">
              Github
            </AppButton>
          </NuxtLink>
        </div>
      </div>

      <div class="bg-white p-9 pb-6 rounded-lg border mt-6">
        <article class="prose prose-sm">
          <ContentDoc />
        </article>
      </div>
    </main>
  </div>

  <AppModal v-if="project && project.fullPreview" v-model="isPreviewOpen">
    <DialogPanel class="w-full max-w-7xl overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all">
      <div class="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
        <span class="group w-4 h-4 grid place-content-center rounded-full bg-red-400" @click="isPreviewOpen = false">
          <Icon name="mingcute:close-fill" size="10" class="text-gray-700 opacity-0 group-hover:opacity-100" />
        </span>
        <span class="group w-4 h-4 grid place-content-center rounded-full bg-yellow-400" @click="isPreviewOpen = false">
          <Icon name="mingcute:minimize-fill" size="10" class="text-gray-700 opacity-0 group-hover:opacity-100" />
        </span>
        <span class="group w-4 h-4 grid place-content-center rounded-full bg-green-400">
          <Icon name="mingcute:fullscreen-2-fill" size="10" class="text-gray-700 opacity-0 group-hover:opacity-100" />
        </span>
      </div>
      <div class="rounded-b-lg select-none pointer-events-none">
        <img :src="project.fullPreview" alt="Preview">
      </div>
    </DialogPanel>
  </AppModal>
</template>
