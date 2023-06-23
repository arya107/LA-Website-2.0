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
});
