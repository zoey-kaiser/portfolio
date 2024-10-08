<script setup lang="ts">
import { diffDays, isAfter } from '@formkit/tempo'

interface Link {
  label: string
  href: string
  iconName?: string
  solid?: boolean
}

interface Talk {
  title: string
  location: string
  description: string
  date: Date
  type?: 'podcast' | 'conference' | 'meeting'
  links?: Link[]
}

const talks: Talk[] = [
  {
    title: 'Code with Conscience',
    location: 'vuejs.de Conf',
    type: 'conference',
    date: new Date('2024-10-08'),
    description: 'Join us for an exploration of ethical technology assessments, where we combine ethical theories and modern development. This talk provides practical insights, real-world examples, and a roadmap for developers to champion responsible innovation. Gain the tools and perspectives needed to navigate ethical challenges while contributing to a tech landscape grounded in integrity.',
    links: [
      {
        label: 'Slides',
        href: '/talks/VueJSDE - Code with Conscience.pdf',
        iconName: 'mingcute:presentation-1-line'
      },
      {
        label: 'Watch',
        href: 'https://www.youtube.com/watch?v=vu83i5XW5do&t=18180s',
        iconName: 'mingcute:tv-2-line',
        solid: true
      }
    ]
  },
  {
    title: 'Between Agency Work and Open Source',
    location: 'DejaVue',
    type: 'podcast',
    date: new Date('2024-09-05'),
    description: 'Michael and Alex are joined by Dan and Zoey, both working at SIDESTREAM, an agency using Vue and Nuxt to realize projects. But besides the project business, they also have Sidebase, a non-profit "spin-off" responsible for open-source Nuxt modules like @sidebase/nuxt-auth which some of you might know already! Listen to the discussion around how doing Open Source benefits SIDESTREAM, how the Vue job market and hiring works, why Vue and Nuxt were chosen first of all and all around Nuxt Auth and further modules.',
    links: [
      {
        label: 'Listen',
        href: 'https://share.transistor.fm/s/e0cd5429',
        iconName: 'mingcute:headphone-line',
        solid: true
      }
    ]
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
                <NuxtLink v-for="link in talk.links" :key="link.href" :href="link.href" :external="true" target="_blank">
                  <AppButton type="primary" :solid="!!link.solid">
                    <div class="flex items-center gap-1">
                      <Icon v-if="link.iconName" :name="link.iconName" size="18" class="mb-[2px]" />
                      {{ link.label }}
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
