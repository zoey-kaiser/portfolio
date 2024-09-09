<script setup lang="ts">
interface Talk {
  title: string
  location: string
  description: string
  date: Date
  link?: string
}

const talks: Talk[] = [
  {
    title: 'Code with Conscience',
    location: 'vuejs.de Conf',
    date: new Date('2024-10-08'),
    link: 'https://conf.vuejs.de/talks/code-with-conscience/',
    description: 'Join us for an exploration of ethical technology assessments, where we combine ethical theories and modern development. This talk provides practical insights, real-world examples, and a roadmap for developers to champion responsible innovation. Gain the tools and perspectives needed to navigate ethical challenges while contributing to a tech landscape grounded in integrity.',
  },
  {
    title: 'Between Agency Work and Open Source',
    location: 'DejaVue',
    date: new Date('2024-09-05'),
    link: 'https://share.transistor.fm/s/e0cd5429',
    description: 'Michael and Alex are joined by Dan and Zoey, both working at SIDESTREAM, an agency using Vue and Nuxt to realize projects. But besides the project business, they also have Sidebase, a non-profit "spin-off" responsible for open-source Nuxt modules like @sidebase/nuxt-auth which some of you might know already! Listen to the discussion around how doing Open Source benefits SIDESTREAM, how the Vue job market and hiring works, why Vue and Nuxt were chosen first of all and all around Nuxt Auth and further modules.',
  },
]
</script>

<template>
  <div class="Page relative">
    <div class="relative">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Talks
      </h2>
      <p class="max-w-2xl mt-2 text-lg leading-8 text-gray-600">
        Some of my most recent and upcoming talks!
      </p>

      <div class="space-y-4 mt-8">
        <AppCard v-for="(talk, index) in talks" :key="index">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div class="space-y-2">
              <h1 class="text-lg font-medium">
                {{ talk.title }} @ {{ talk.location }}
              </h1>
              <p class="max-w-xl text-gray-600 text-sm line-clamp-4">
                {{ talk.description }}
              </p>
            </div>

            <div class="flex flex-col lg:items-end gap-4">
              <p class="text-lg font-medium grow">
                {{ formatDate(talk.date) }}
              </p>

              <NuxtLink v-if="talk.link" :to="talk.link" :external="true" target="_blank">
                <AppButton type="primary">
                  <div class="flex items-center gap-1">
                    View
                    <Icon name="mingcute:external-link-line" size="18" class="mb-[3px]" />
                  </div>
                </AppButton>
              </NuxtLink>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>
