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
    title: 'Bau dein eigenes Weltraum-Idle-Spiel mit Vue.js',
    location: 'JavaScript Days',
    type: 'conference',
    description: 'Nimm an unserem einsteiger freundlichen Vue.js-Workshop teil und baue deine erste praxisnahe App: ein Weltraum-Idle-Spiel, in dem du Flotten verwalten, Aufträge abschließen und Ressourcen handeln kannst. Du lernst, wie man ein Vue.js-Projekt aufsetzt, den Zustand der Anwendung mit Pinia verwaltet, das Routing mit Vue Router umsetzt und interaktive UI-Komponenten erstellt. Am Ende des Workshops wirst du eine voll funktionsfähige App mit nach Hause nehmen – und ein solides Verständnis der wichtigsten Vue.js-Konzepte haben!',
    date: new Date('2025-10-21'),
    links: [
      {
        label: 'Infos',
        href: 'https://javascript-days.de/vue/bau-dein-eigenes-weltraum-idle-spiel-mit-vuejs-teil-1/',
        iconName: 'mingcute:information-line',
        solid: false
      },
      {
        label: 'Tickets',
        href: 'https://javascript-days.de/berlin/tickets-berlin/',
        iconName: 'mingcute:ticket-line',
        solid: true
      }
    ]
  },
  {
    title: 'Nuxt + AI: Giving Your Nuxt App a Voice (and Superpowers)',
    location: 'Vue.js Hamburg Meetup',
    type: 'meeting',
    date: new Date('2025-09-10'),
    description: 'What if your Nuxt app could talk? Imagine an app that doesn’t just wait for clicks — it chats, understands your data, and even takes action. In this talk, we’ll explore why AI makes sense in your app, when it’s worth adding, and how to set it up without losing your mind. You’ll learn how to connect your app to its own data quickly and easily, turning a regular Nuxt app into one with a voice — and superpowers.',
    links: [
      {
        label: 'Join',
        href: 'https://www.meetup.com/hamburg-vue-js-meetup/events/310352654',
        iconName: 'mingcute:user-add-2-line',
        solid: true
      }
    ]
  },
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
        href: 'https://www.youtube.com/watch?v=h3ro7zTFobg',
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
  <div id="talks" class="Page relative">
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
                <Icon v-if="talk.type === 'podcast'" name="mingcute:microphone-line" size="22" class="hidden md:block" />
                <Icon v-if="talk.type === 'conference'" name="mingcute:badge-line" size="22" class="hidden md:block" />
                <Icon v-if="talk.type === 'meeting'" name="mingcute:group-3-line" size="22" class="hidden md:block" />

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
