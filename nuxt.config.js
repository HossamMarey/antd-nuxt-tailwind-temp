
const BASE_API_URL = process.env.BASE_URL || "https://api.url"
export default {

  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Grand Community',
    title: 'Grand Community',
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/antd.less',
    '~/assets/styles/global.css',
    '~/assets/styles/tailwind.css',
  ],

  // vite: {
  //   ssr: false,
  //   css: {
  //     preprocessorOptions: {
  //       less: {
  //         sourceMap: false,
  //         javascriptEnabled: true,
  //         // additionalData: `@import "@/assets/styles/antd.less";`,

  //       },
  //     },
  //   },
  // },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/antd-ui',
    '~/plugins/i18n.js',
    {
      src: '~/plugins/axios-accessor.js',
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // 'nuxt-vite',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: BASE_API_URL,
  },

  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    defaultDirection: 'ltr',
    lazy: true,
    langDir: 'locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl' },
    ],
    vueI18n: {
      fallbackLocale: 'ar',
    },
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   onlyOnRoot: true, // recommended,
    // },
    detectBrowserLanguage: false,
  },
  devtools: true,
  // for public .env variables
  // this.$config.BASE_API_URL
  publicRuntimeConfig: {
    BASE_API_URL,
  },
  privateRuntimeConfig: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },

  },
}
