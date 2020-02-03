import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import "./communities.css";

const Communities = ({ data, lang }) => {
  const communities = data.allMarkdownRemark.edges.filter(
    item => item.node.frontmatter.language === lang
  );
  const text = data.text.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components;
  return (
    <>
      <section className="bg-primary-dark padding-top-3 padding-bottom-3">
        <div className="grid-container margin-bottom-4">
          <h2 className="text-white text-center font-ui-xl tablet:font-ui-2xl">
            {text.communities.title}
          </h2>

          <div className="grid-row padding-y-2 padding-x-105 flex-justify-center">
            {communities.map((community, i) => (
              <div className="grid-col-6 tablet:grid-col-4" key={`ccc-${i}`}>
                <a
                  href={community.node.frontmatter.link}
                  target="_blank"
                  aria-label={community.node.frontmatter.title}
                >
                  <div className="bg-base-darkest margin-1">
                    <Img
                      fluid={
                        data[community.node.frontmatter.img].childImageSharp
                          .fluid
                      }
                      fadeIn={false}
                      className="Communities--imageStyles"
                      alt={community.node.frontmatter.alt}
                    />
                  </div>
                  <h3 className="text-base-lightest margin-x-3 font-body-xs tablet:font-body-md Communities--textStyles">
                    {community.node.frontmatter.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
          <div className="grid-row usa-intro text-white">
            <p className="font-body-lg">{text.communities.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="usa-section grid-container padding-top-3 padding-bottom-3">
        <h2 className="text-center font-ui0-3xl">{text.map.title}</h2>
        <p className="text-italic usa-intro">{text.map.subtitle}</p>
        <div className="grid-row">
          <div className="grid-col-8 grid-offset-2">
            <p className="usa-sr-only">
              For assistance with this map please call{" "}
              <a href="tel:1-512-854-6185">(512) 854-6185</a> or email{" "}
              <a href="mailto:census@traviscounty.org">
                census@traviscounty.org
              </a>
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
    </>
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
                  communities {
                    subtitle
                    title
                  }
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
        latinx: file(base: { eq: "bailadores.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        asianAmerican: file(base: { eq: "asian-american-festival.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        africanAmerican: file(base: { eq: "juneteenth.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        student: file(base: { eq: "aisd-students.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        homelessness: file(base: { eq: "homelessness.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
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
    render={data => <Communities data={data} {...props} />}
  />
);
