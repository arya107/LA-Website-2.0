import { icon } from '@fortawesome/fontawesome-svg-core';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/dark.scss',
  ],

  components: { global: true, dirs: ['~/components'] },
  plugins: ['~/plugins/fontawesome.js'],

  modules: [
    // '@nuxtjs/devtools',
    '@nuxt/content',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],

  content: {
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },

  gtag: {
    id: 'G-4325YB08P9',
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://learn-aviation.com',
    },
  },

  pwa: {
    manifest: {
      name: 'Learn Aviation',
      short_name: 'Learn Aviation',
      description: 'Discover a World of Aviation Training.',
      lang: 'fa',
      start_url: '.',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#007fc2',
      icons: [
        {
          src: 'icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: 'icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: 'icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'icons/mstile-270x270.png',
          sizes: '270x270',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // content: {
  //   https://content.nuxtjs.org/api/configuration
  // },

  devtools: {
    enabled: false,
  },

  ssr: false,

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
