import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiLaptopWindows, mdiLinkVariant } from "@mdi/js";

import "./communities.css";

const Communities = ({ data, lang, imgs }) => {
  const communities = data.allMarkdownRemark.edges.filter(
    item => item.node.frontmatter.language === lang
  );
  const text = data.text.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components;

  const renderCommunityImg = community => {
    const imgPathName = community.node.frontmatter.img;
    if (imgPathName.split("/").length > 1) {
      let leImg = imgs.nodes.find(img => {
        return (
          img.fluid.src.split("/").pop() ===
          community.node.frontmatter.img.split("/").pop()
        );
      });

      return (
        <Img
          fluid={leImg.fluid}
          fadeIn={false}
          className="Communities--imageStyles"
          alt={community.node.frontmatter.alt}
        />
      );
    } else {
      return (
        <Img
          fluid={data[community.node.frontmatter.img].childImageSharp.fluid}
          fadeIn={false}
          className="Communities--imageStyles"
          alt={community.node.frontmatter.alt}
          style={{ borderRadius: "5px 5px 0 0" }}
        />
      );
    }
  };

  return (
    <section className="bg-primary-dark padding-top-3 padding-bottom-3">
      <div className="grid-container margin-bottom-4">
        <h2 className="text-white text-center font-ui-xl tablet:font-ui-2xl">
          {text.communities.title}
        </h2>

        <div className="grid-row padding-y-2 padding-x-105 flex-justify-center">
          {communities.map((community, i) => (
            <div
              className="grid-col-6 tablet:grid-col-4 margin-bottom-2"
              key={`ccc-${i}`}
            >
              <a
                href={community.node.frontmatter.link}
                target="_blank"
                aria-label={community.node.frontmatter.title}
              >
                <div className="bg-base-darkest margin-x-1">
                  {renderCommunityImg(community)}
                </div>
                <h3 className="text-base-lightest margin-x-3 font-body-xs tablet:font-body-md Communities--textStyles">
                  {community.node.frontmatter.title}
                </h3>
              </a>
              <div
                className="margin-x-1 text-center bg-primary-lighter padding-y-1 grid-row"
                style={{ borderRadius: "0 0 5px 5px" }}
              >
                <div className="grid-col-6">
                  <a href={`mailto:${community.node.frontmatter.email}`}>
                    <Icon
                      path={mdiEmailOutline}
                      title={community.node.frontmatter.email}
                      size={1}
                    />
                  </a>
                </div>
                <div className="grid-col-6">
                  <a href={community.node.frontmatter.link} target="_blank">
                    <Icon
                      path={mdiLinkVariant}
                      title={community.node.frontmatter.link}
                      size={1}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-row usa-intro text-white">
          <p className="font-body-lg">{text.communities.subtitle}</p>
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
                email
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
                }
                language
              }
              fields {
                sourceName
              }
            }
          }
        }
        communityImages: allImageSharp {
          nodes {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
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
      }
    `}
    render={data => (
      <Communities data={data} imgs={data.communityImages} {...props} />
    )}
  />
);
