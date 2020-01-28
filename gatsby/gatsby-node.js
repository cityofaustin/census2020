const path = require("path");
const webpack = require("webpack");

const uswdsRoot = "node_modules/uswds";
const shims = "shims";

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Until uswds exports the components individually
        uswds_components: path.resolve(
          __dirname,
          uswdsRoot,
          "src/js/components"
        ),
        uswds_images: path.resolve(__dirname, uswdsRoot, "dist/img"),
        // Until uswds exports the polyfills individually, though this doesn't totally fix things
        // because some polyfills are included no matter what, see below
        uswds_polyfills: path.resolve(__dirname, uswdsRoot, "src/js/polyfills"),
        // until the `uswds-react` library is created, just a helper for now
        "uswds-react": path.resolve(__dirname, "src/lib"),
        /**
         * Reroute and shim some polyfills to be able to statically render
         */
        "element-closest": path.resolve(__dirname, shims, "element-closest"),
        "element-closest-orig": path.resolve(
          __dirname,
          "node_modules/element-closest"
        ),
        "elem-dataset": path.resolve(__dirname, shims, "elem-dataset"),
        "elem-dataset-orig": path.resolve(
          __dirname,
          "node_modules/elem-dataset"
        ),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  let types = ["MarkdownRemark", "Yaml"];
  if (types.includes(node.internal.type)) {
    const fileNode = getNode(node.parent);

    createNodeField({
      node,
      name: "sourceName",
      value: fileNode.sourceInstanceName,
    });
  }

  // Create slug for each page (currently based on YAML data files in `src/data`)
  // @TODO will need to extend when there are more deeply nested routes

  if (node.internal.type.includes("Yaml")) {
    let route = node.page === "index" ? "" : node.page;
    let slug = `/${node.language}/${route}`;

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      site {
        siteMetadata {
          languages {
            langs
          }
        }
      }
      allIndexYaml {
        nodes {
          language
          fields {
            slug
          }
        }
      }
      allHowYaml {
        nodes {
          language
          fields {
            slug
          }
        }
      }
      allWhyYaml {
        nodes {
          language
          fields {
            slug
          }
        }
      }
      allInfoYaml {
        nodes {
          language
          fields {
            slug
          }
        }
      }
      allAboutYaml {
        nodes {
          language
          fields {
            slug
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: {
        languages: { langs },
      },
    },
    allIndexYaml,
    allHowYaml,
    allWhyYaml,
    allInfoYaml,
    allAboutYaml,
  } = data;

  const IndexTemplate = require.resolve(`./src/templates/index.js`);
  const HowTemplate = require.resolve(`./src/templates/how.js`);
  const WhyTemplate = require.resolve(`./src/templates/why.js`);
  const InfoTemplate = require.resolve(`./src/templates/info.js`);
  const AboutTemplate = require.resolve(`./src/templates/about.js`);
  const NewsAndEventsTemplate = require.resolve(
    "./src/templates/news-and-events.js"
  );

  langs.forEach(lang => {
    const indexSlug = allIndexYaml.nodes.filter(node => {
      return node.language === lang;
    })[0].fields.slug;

    actions.createPage({
      path: indexSlug,
      component: IndexTemplate,
      context: {
        lang,
      },
    });

    const howSlug = allHowYaml.nodes.filter(node => {
      return node.language === lang;
    })[0].fields.slug;

    actions.createPage({
      path: howSlug,
      component: HowTemplate,
      context: {
        lang,
      },
    });

    const whySlug = allWhyYaml.nodes.filter(node => {
      return node.language === lang;
    })[0].fields.slug;

    actions.createPage({
      path: whySlug,
      component: WhyTemplate,
      context: {
        lang,
      },
    });

    const infoSlug = allInfoYaml.nodes.filter(node => {
      return node.language === lang;
    })[0].fields.slug;

    actions.createPage({
      path: infoSlug,
      component: InfoTemplate,
      context: {
        lang,
      },
    });

    const aboutSlug = allAboutYaml.nodes.filter(node => {
      return node.language === lang;
    })[0].fields.slug;

    actions.createPage({
      path: aboutSlug,
      component: AboutTemplate,
      context: {
        lang,
      },
    });

    actions.createPage({
      path: `/${lang}/news-and-events`,
      component: NewsAndEventsTemplate,
      context: {
        lang,
      },
    });
  });
};
