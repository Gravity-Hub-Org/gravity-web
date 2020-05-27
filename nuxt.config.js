const { sections, flattenSections } = require('./src/global/links');

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Gravity Protocol',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'description',
        content: `Blockchain Agnostic Oracles and Interchain Communication Network.`
      },
      {
        name: 'keywords',
        content: 'blockchain, crosschain, interchain, oracles, datafeeds, waves, ethereum, bitcoin, gateways, consensus, smartcontract, ride, solidity'
      },
      {
        content: 'Gravity',
        property: 'og:title'
      },
      {
        content: 'index.html',
        property: 'og:url'
      },
      {
        content: 'website',
        property: 'og:type'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'gravity-hub site',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Orbitron:400,500,600,700,800,900|Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#ff8e1e',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  srcDir: 'src/',
  modules: ['@aceforth/nuxt-optimized-images', '@nuxtjs/sitemap'],

  optimizedImages: {
    optimizeImagesInDev: true,
    optimizeImages: true,
  },

  sitemap: false,
};
