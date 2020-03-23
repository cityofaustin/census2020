const path = require("path");
const siteMetadata = require("./src/data/siteMetadata");

module.exports = {
  siteMetadata,

  // Note: it must *not* have a trailing slash.
  pathPrefix: process.env.BASEURL || "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `communities`,
        path: path.join(__dirname, `content`, `communities`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: path.join(__dirname, `content`, `text`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: path.join(__dirname, `content`, `components`),
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-axe",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
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
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1pqe_NZ_K3gZyd_TwkduToqgscvjt2O5mghrZiLuSJnE",
        worksheetTitle: "Form Responses 1",
        credentials: require("./census2020-8f45e16b8de8.json"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-27761834-14",
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
