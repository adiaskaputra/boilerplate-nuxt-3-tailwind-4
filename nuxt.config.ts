export default defineNuxtConfig({
  app: {
    head: {
      title: 'Boilerplate',
      link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.png' }],
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
      ],
    },
  },

  devtools: {
    enabled: false,
  },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],

  imports: {
    dirs: ['composables/**'],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transition.css',
    '~/assets/css/main.css',
  ],

  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      'postcss-lighten-darken': {},
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: false,
        strictNullChecks: true,
      },
    },
  },

  devServer: {
    port: 8000,
  },

  compatibilityDate: '2025-01-09',
})
