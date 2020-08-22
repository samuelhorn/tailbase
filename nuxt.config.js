
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // Twitter Card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Tailbase'},
      {name: 'twitter:description', content: 'Tailwind config generator for a typygraphic scale with vertical rythm.'},
      {name: 'twitter:image', content: 'https://tailbase.samuelhorn.com/summary.png'},
      // Facebook OpenGraph
      {property: 'og:title', content: 'Tailbase'},
      {property: 'og:site_name', content: 'Tailbase'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content:  'https://tailbase.samuelhorn.com/summary.png'},
      {property: 'og:description', content: 'Tailwind config generator for a typygraphic scale with vertical rythm.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qfe7lgs.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-171681124-2'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
