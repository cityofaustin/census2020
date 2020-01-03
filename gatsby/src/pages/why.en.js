import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const WhyEN = ({ location, uri, data, ...rest }) => {
  // const {
  //   childImageSharp: { fluid: heroImg },
  // } = data.file;
  // const { nodes: news } = data.allMarkdownRemark;
  // const content = data.indexYaml;

  return (
    <>
      <Layout language={"en"} location={location}>
        <section className="grid-container usa-section">
          <h2>Why (English)</h2>
        </section>
        <section className="grid-container usa-section">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-12">
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0"></h2>
              <iframe
                src="https://www.censushardtocountmaps2020.us/?latlng=30.32684%2C-97.64011&z=10&query=counties%3A%3A48453&promotedfeaturetype=counties&arp=arpRaceEthnicity&layers=major%20roads%2Ccounties&infotab=info-mrrlrs&filterQuery=false"
                height="900"
                width="100%"
              ></iframe>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// @TODO: Replace
export const query = graphql`
  query WhyEnQuery {
    file(base: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indexYaml(language: { eq: "en" }) {
      callout {
        title
        text
        cta {
          text
          link
        }
      }
      media {
        title
        text
      }
      section {
        title
        text
        cta {
          text
          link
        }
      }
      tagline {
        title
        content
      }
      layout {
        latestNews
      }
    }
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "en" } } }) {
      totalCount
      nodes {
        id
        html
        excerpt
        frontmatter {
          date
          title
          language
        }
      }
    }
  }
`;

export default WhyEN;
