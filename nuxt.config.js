import colors from 'vuetify/es5/util/colors'

export default {
  // target:"static",

  target: "server",
  server: {
    port: 9090,
    host: "0.0.0.0", // default: 3000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - LGU-Benguet-front',
    title: 'LGU-Benguet-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap' }
    ]
  },
  env: {
    baseUrl: process.env.API_URL,
    basePath: process.env.BASE_PATH,
    credentials: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/imports.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~mixins/index', ssr: false },
    { src: '~global/globalMixin', ssr: true },
    { src: '~plugins/components.js' },
    { src: '~global/apiKey.js' },
    { src: '~/plugins/vue-pdf-embed.js', ssr: false },
    { src: '~plugins/vue-notification', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    redirect: {
      logout: '/contractor/login',
      login: '/contractor/login',
      callback: '/contractor/login',
      home: '/awarded-projects'
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
        },
        user: {
          property: '',
        },
        tokenType: '',
        endpoints: {
          login: { url: 'login-contractor', method: 'post' },
          logout: { url: 'logout-contractor', method: 'post' },
          user: { url: 'contractor-details', method: 'get' }
        }
      }
    },
    // plugins: ['@/plugins/auth-lang-redirect.js']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: ['auth']
  }
}
