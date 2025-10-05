import defaultMeta from './config/defaultMeta';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'goodmoov',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [...defaultMeta],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/icon.png'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },

    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['swiper/css', 'swiper/css/pagination'],

  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-swiper'],

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic']
    }
  },

  image: {
    format: ['webp'],
    quality: 100
  }
});
