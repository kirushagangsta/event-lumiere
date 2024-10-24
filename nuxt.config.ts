// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  css: ['~/assets/scss/main.scss'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/fawn.png' }
      ],
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/common/_mixins.scss" as *; @use "@/assets/scss/common/_variables.scss" as *;'
        }
      }
    }
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '@/assets/scss/tailwind.scss',
    viewer: false
  },

  devtools: { enabled: false }
})
