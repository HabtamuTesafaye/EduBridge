import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/apollo'
  ],
  css: ['@/assets/css/main.css'],
  ui: {
    theme: {
      transitions: false
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})