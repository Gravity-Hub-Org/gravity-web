const { sections, metaTags, flattenSections, shortDescription, getSitemap } = require('./src/global/links');

export const head = {
  title: shortDescription,
  meta: metaTags,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Orbitron:400,500,600,700,800,900|Poppins:100,200,300,400,500,600,700,800,900&display=swap',
    },
  ],
};
export const loading = {
  color: '#ff8e1e',
};
export const build = {
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
};
export const srcDir = 'src/';
export const modules = [
  '@aceforth/nuxt-optimized-images',
  '@nuxtjs/sitemap',
];
export const buildModules = [
  ['@nuxtjs/google-analytics', {
    id: 'UA-168552658-2'
  }]
];
export const router = {
  generate: {
    routes: ['whitepaper']
  }
};
export const optimizedImages = {
  optimizeImagesInDev: true,
  optimizeImages: true,
};
export const sitemap = getSitemap();
