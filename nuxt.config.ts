// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-09',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/fonts', '@nuxt/icon'],
  experimental: {
    viewTransition: true
  },
  content: {
    documentDriven: true
  },
  typescript: {
    shim: false
  },
})
