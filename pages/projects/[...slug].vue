<script lang="ts" setup>
import { DialogPanel } from '@headlessui/vue'

const { page: project } = useContent()
const isPreviewOpen = ref(false)
</script>

<template>
  <div class="relative pt-32 min-h-[93vh]">
    <div class="absolute top-0 left-0 w-full h-[40vh] bg-pastel-lilac-100" />

    <main class="Page relative">
      <div class="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div class="space-y-2">
          <h1 class="text-4xl font-bold">
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

      <div class="bg-white p-6 rounded-lg border mt-6">
        <article class="prose">
          <ContentDoc />
        </article>
      </div>
    </main>
  </div>

  <AppModal v-if="project.fullPreview" v-model="isPreviewOpen">
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
