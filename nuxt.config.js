const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
  server: {
    port: 8000, 
  },
  head: {
    titleTemplate: process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'inspire',
        path: '/inspire1',
        component: resolve(__dirname, 'pages/inspire.vue')
      })
    }
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [

  ],
  devModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    'nuxt-material-design-icons'
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
  build: {
    extend (config, ctx) {
    }
  }
}
