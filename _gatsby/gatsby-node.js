const path = require(`path`)
const webpack = require("webpack")

const uswdsRoot = "node_modules/uswds"
const shims = "shims"

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
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
