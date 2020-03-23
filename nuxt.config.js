export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDq5FhDTdWUjAB3lLtPAScou9b7Neui9zI',
      authDomain: 'firetest-d14b0.firebaseapp.com',
      databaseURL: 'https://firetest-d14b0.firebaseio.com',
      projectId: 'firetest-d14b0',
      storageBucket: 'firetest-d14b0.appspot.com',
      messagingSenderId: '640718029289',
      appId: '1:640718029289:web:6344d9db687d5841ac4b78'
    },
    services: {
      auth: {
        static: true,
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction'
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
        },
        ssr: true
      },
      firestore: {
        static: true,
        enablePersistence: {
          synchronizeTabs: true
        }
      }
    }
  },
  pwa: {
    meta: false,
    icon: false,
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: false
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    optionsPath: './vuetify.js'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isServer }) {
      if (isServer) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/auth': 'commonjs @firebase/auth',
          '@firebase/firestore': 'commonjs @firebase/firestore'
        }
      }
    }
  }
}
