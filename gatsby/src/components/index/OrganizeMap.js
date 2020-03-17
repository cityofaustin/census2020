import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import "./communities.css";

const OrganizeMap = ({ data, lang }) => {
  const text = data.text.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components;

  return (
    <section className="usa-section grid-container padding-top-3 padding-bottom-3">
      <h2 className="text-center font-ui0-3xl">{text.map.title}</h2>
      <p className="text-italic usa-intro">{text.map.subtitle}</p>
      <div className="grid-row">
        <div className="grid-col-8 grid-offset-2">
          <p className="usa-sr-only">
            For assistance with this map please call{" "}
            <a href="tel:1-512-854-6185">512-854-6185</a> or email{" "}
            <a href="mailto:census@traviscounty.org">census@traviscounty.org</a>
            .
          </p>
          <a
            href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=fd4bd4db7b6e4632a19b1a0a03f8094b"
            target="_blank"
          >
            <Img
              fluid={data.mapImg.childImageSharp.fluid}
              style={{
                maxHeight: "600px",
                width: "100%",
              }}
              alt="Screenshot of Neighborhood map"
            />
          </a>
          <div className="text-center margin-top-3">
            <a
              href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=fd4bd4db7b6e4632a19b1a0a03f8094b"
              target="_blank"
            >
              <button className="usa-button usa-button--outline usa-button--big">
                {text.map.cta}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "communities" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                alt
                img
                link
                source
                title
                type
                language
              }
              fields {
                sourceName
              }
              fileAbsolutePath
            }
          }
        }
        text: allMarkdownRemark(
          filter: {
            fields: { sourceName: { eq: "text" } }
            frontmatter: { components: { communities: {} } }
          }
        ) {
          edges {
            node {
              frontmatter {
                components {
                  map {
                    cta
                    subtitle
                    title
                  }
                }
                language
              }
              fields {
                sourceName
              }
            }
          }
        }
        mapImg: file(base: { eq: "NeighborhoodMapScreenshot.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <OrganizeMap data={data} imgs={data.communityImages} {...props} />
    )}
  />
);
