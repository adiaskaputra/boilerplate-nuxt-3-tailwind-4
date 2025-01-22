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
    'nuxt-security',
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
  security: {
    nonce: true,
    rateLimiter: false,
    csrf: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          'fonts.googleapis.com',
          "'unsafe-inline'", // Recommended default for most Nuxt apps
        ],
        'base-uri': ["'none'"],
        'img-src': ["'self'", 'data:'], // Add relevant https://... sources if you load images from external sources
        'font-src': ["'self'", 'fonts.gstatic.com'],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'frame-ancestors': ["'self'"],
        'upgrade-insecure-requests': true,
      },
      permissionsPolicy: {
        camera: ['self'],
      },
    },
  },
  devServer: {
    port: 8000,
  },
  compatibilityDate: '2025-01-09',
})
