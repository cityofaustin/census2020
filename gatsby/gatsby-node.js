const path = require('path');
const webpack = require('webpack');

const uswdsRoot = 'node_modules/uswds';
const shims = 'shims';

// module.exports = {
//   onCreateWebpackConfig: ({ stage, actions }) => {
//     actions.setWebpackConfig({
//       resolve: {
//         alias: {
//           // Until uswds exports the components individually
//           uswds_components: path.resolve(
//             __dirname,
//             uswdsRoot,
//             'src/js/components'
//           ),
//           uswds_images: path.resolve(__dirname, uswdsRoot, 'dist/img'),
//           // Until uswds exports the polyfills individually, though this doesn't totally fix things
//           // because some polyfills are included no matter what, see below
//           uswds_polyfills: path.resolve(
//             __dirname,
//             uswdsRoot,
//             'src/js/polyfills'
//           ),
//           // until the `uswds-react` library is created, just a helper for now
//           'uswds-react': path.resolve(__dirname, 'src/lib'),
//           /**
//            * Reroute and shim some polyfills to be able to statically render
//            */
//           'element-closest': path.resolve(__dirname, shims, 'element-closest'),
//           'element-closest-orig': path.resolve(
//             __dirname,
//             'node_modules/element-closest'
//           ),
//           'elem-dataset': path.resolve(__dirname, shims, 'elem-dataset'),
//           'elem-dataset-orig': path.resolve(
//             __dirname,
//             'node_modules/elem-dataset'
//           ),
//         },
//       },
//     });
//   },
// };

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Until uswds exports the components individually
        uswds_components: path.resolve(
          __dirname,
          uswdsRoot,
          'src/js/components'
        ),
        uswds_images: path.resolve(__dirname, uswdsRoot, 'dist/img'),
        // Until uswds exports the polyfills individually, though this doesn't totally fix things
        // because some polyfills are included no matter what, see below
        uswds_polyfills: path.resolve(__dirname, uswdsRoot, 'src/js/polyfills'),
        // until the `uswds-react` library is created, just a helper for now
        'uswds-react': path.resolve(__dirname, 'src/lib'),
        /**
         * Reroute and shim some polyfills to be able to statically render
         */
        'element-closest': path.resolve(__dirname, shims, 'element-closest'),
        'element-closest-orig': path.resolve(
          __dirname,
          'node_modules/element-closest'
        ),
        'elem-dataset': path.resolve(__dirname, shims, 'elem-dataset'),
        'elem-dataset-orig': path.resolve(
          __dirname,
          'node_modules/elem-dataset'
        ),
      },
    },
  });
};

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()));
//       return Promise.reject(result.errors);
//     }

//     const posts = result.data.allMarkdownRemark.edges;

//     posts.forEach(edge => {
//       const id = edge.node.id;
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       });
//     });

//     // Tag pages:
//     let tags = [];
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags);
//       }
//     });
//     // Eliminate duplicate tags
//     tags = _.uniq(tags);

//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`;

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.js`),
//         context: {
//           tag,
//         },
//       });
//     });
//   });
// };
