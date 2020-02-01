import React from "react";
import { StaticQuery, graphql } from "gatsby";

const WarningBanner = ({ data, lang }) => {
  const bannerText = data.bannerData.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components.banner;

  return (
    <div className="usa-alert usa-alert--warning">
      <div className="usa-alert__body">
        <h3 className="usa-alert__heading">{bannerText.title}</h3>
        <p className="usa-alert__text">{bannerText.text}</p>
      </div>
    </div>
  );
};

export default props => (
  <StaticQuery
    render={data => <WarningBanner data={data} {...props} />}
    query={graphql`
      query {
        bannerData: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "text" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                components {
                  banner {
                    title
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
  />
);
