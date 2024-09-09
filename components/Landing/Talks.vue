<script setup>
const talks = [
  {
    id: 1,
    title: 'Code with Conscience',
    location: 'vuejs.de Conf',
    description: 'Join us for an exploration of ethical technology assessments, where we combine ethical theories and modern development. This talk provides practical insights, real-world examples, and a roadmap for developers to champion responsible innovation. Gain the tools and perspectives needed to navigate ethical challenges while contributing to a tech landscape grounded in integrity.',
  },
  {
    id: 1,
    title: 'Between Agency Work and Open Source',
    location: 'DejaVue',
    description: 'Michael and Alex are joined by Dan and Zoey, both working at SIDESTREAM, an agency using Vue and Nuxt to realize projects. But besides the project business, they also have Sidebase, a non-profit "spin-off" responsible for open-source Nuxt modules like @sidebase/nuxt-auth which some of you might know already! Listen to the discussion around how doing Open Source benefits SIDESTREAM, how the Vue job market and hiring works, why Vue and Nuxt were chosen first of all and all around Nuxt Auth and further modules.',
  },
]
</script>

<template>
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div class="relative">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Talks
      </h2>
      <p class="max-w-2xl mt-2 text-lg leading-8 text-gray-600">
        Some of my most recent and upcoming talks!
      </p>

      <div class="space-y-4 mt-8">
        <AppCard
          v-for="talk in talks"
          :key="talk.id"
        >
          <div class="flex items-start justify-between">
            <div class="space-y-2">
              <h1 class="text-lg font-medium">
                {{ talk.title }} @ {{ talk.location }}
              </h1>
              <p class="max-w-xl text-gray-600 text-sm line-clamp-4">
                {{ talk.description }}
              </p>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>
