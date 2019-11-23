const path = require('path');
const siteMetadata = require('./src/data/siteMetadata');
const languages = require('./src/data/languages.js');

module.exports = {
  siteMetadata,
  // siteMetadata: {
  //   languages,
  //   title: `Census 2020`,
  //   header: {
  //     secondaryLinks: [
  //       { text: 'English', link: '/en' },
  //       { text: 'Español', link: '/es' },
  //       { text: 'tiếng Việt', link: '/vt' },
  //     ],
  //     navigation: [
  //       {
  //         items: [{ text: 'Community', link: '/en/community' }],
  //       },
  //       {
  //         items: [{ text: 'About', link: '/en/about' }],
  //       },
  //       {
  //         items: [{ text: 'Why', link: '/en/why' }],
  //       },
  //       {
  //         items: [{ text: 'How', link: '/en/how' }],
  //       },
  //       {
  //         title: 'Current Section',
  //         items: [
  //           { text: 'Navigation link', link: '/' },
  //           { text: 'Navigation link', link: '/' },
  //           { text: 'Navigation link', link: '/' },
  //         ],
  //       },
  //     ],
  //   },
  // },

  // Note: it must *not* have a trailing slash.
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: path.join(__dirname, `content`, `news`),
      },
    },
    `gatsby-source-usa-spending-toptier-agencies`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-axe',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // {
    //   resolve: `@igorko/gatsby-plugin-i18next`,
    //   options: {
    //     availableLngs: ['en', 'es', 'vt'],
    //     fallbackLng: 'en',
    //     // siteUrl: 'https://www.example.com/',
    //   },
    // },
  ],
};
