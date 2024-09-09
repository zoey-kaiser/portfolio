<script setup lang="ts">
import { diffDays, isAfter } from '@formkit/tempo'

interface Talk {
  title: string
  location: string
  description: string
  date: Date
  link?: string
  ticketLink?: string
  type?: 'podcast' | 'conference' | 'meeting'
  linkLabel?: 'watch' | 'listen' | 'details'
}

const talks: Talk[] = [
  {
    title: 'Code with Conscience',
    location: 'vuejs.de Conf',
    type: 'conference',
    date: new Date('2024-10-08'),
    link: 'https://conf.vuejs.de/talks/code-with-conscience/',
    linkLabel: 'details',
    ticketLink: 'https://conf.vuejs.de/tickets/',
    description: 'Join us for an exploration of ethical technology assessments, where we combine ethical theories and modern development. This talk provides practical insights, real-world examples, and a roadmap for developers to champion responsible innovation. Gain the tools and perspectives needed to navigate ethical challenges while contributing to a tech landscape grounded in integrity.',
  },
  {
    title: 'Between Agency Work and Open Source',
    location: 'DejaVue',
    type: 'podcast',
    date: new Date('2024-09-05'),
    link: 'https://share.transistor.fm/s/e0cd5429',
    linkLabel: 'listen',
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
              <div class="flex items-center gap-1">
                <Icon v-if="talk.type === 'podcast'" name="mingcute:microphone-line" size="22" />
                <Icon v-if="talk.type === 'conference'" name="mingcute:badge-line" size="22" />
                <Icon v-if="talk.type === 'meeting'" name="mingcute:group-3-line" size="22" />

                <h1 class="text-lg font-medium">
                  {{ talk.title }} @ {{ talk.location }}
                </h1>
              </div>
              <p class="max-w-xl text-gray-600 text-sm line-clamp-4">
                {{ talk.description }}
              </p>
            </div>

            <div class="flex flex-col lg:items-end gap-4">
              <p class="text-lg font-medium grow">
                {{ formatDate(talk.date) }}
                <span v-if="isAfter(talk.date, new Date())">
                  (In {{ diffDays(talk.date, new Date()) }} days)
                </span>
              </p>

              <div class="flex items-center gap-2">
                <NuxtLink v-if="talk.ticketLink && isAfter(talk.date, new Date())" :to="talk.ticketLink" :external="true" target="_blank">
                  <AppButton type="primary" :solid="false">
                    <div class="flex items-center gap-1">
                      Tickets
                      <Icon name="mingcute:external-link-line" size="18" class="mb-[3px]" />
                    </div>
                  </AppButton>
                </NuxtLink>
                <NuxtLink v-if="talk.link" :to="talk.link" :external="true" target="_blank">
                  <AppButton type="primary">
                    <div class="flex items-center gap-1">
                      <template v-if="talk.linkLabel === 'details'">
                        <Icon name="mingcute:information-line" size="18" class="mb-[3px]" />
                        Details
                      </template>
                      <template v-if="talk.linkLabel === 'listen'">
                        <Icon name="mingcute:headphone-line" size="18" class="mb-[3px]" />
                        Listen
                      </template>
                      <template v-if="talk.linkLabel === 'watch'">
                        <Icon name="mingcute:tv-2-line" size="18" class="mb-[3px]" />
                        Watch
                      </template>
                    </div>
                  </AppButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>
