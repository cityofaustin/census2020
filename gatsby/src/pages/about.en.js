import React from 'react';
import { graphql } from 'gatsby';
import FaqAccordion from '../components/faq.js';

import Layout from '../components/layout';

const AboutEN = ({ location, uri, data, ...rest }) => {
  // const {
  //   childImageSharp: { fluid: heroImg },
  // } = data.file;
  // const { nodes: news } = data.allMarkdownRemark;
  // const content = data.indexYaml;

  return (
    <>
      <Layout language={'en'} location={location}>
        <section className="grid-container usa-section">
          <h2>About (English)</h2>
          <FaqAccordion/>
        </section>
      </Layout>
    </>
  );
};

// @TODO: Replace
export const query = graphql`
  query AboutEnQuery {
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

export default AboutEN;
