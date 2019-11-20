const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Census 2020`,
    header: {
      secondaryLinks: [
        { text: 'Secondary link', link: '/' },
        { text: 'Another secondary link', link: '/' },
      ],
      navigation: [
        {
          title: 'Current Section',
          items: [
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
          ],
        },
        {
          title: 'Section',
          items: [
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
          ],
        },
        {
          items: [{ text: 'Español', link: '/es/' }],
        },
      ],
    },
  },
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
  ],
};
