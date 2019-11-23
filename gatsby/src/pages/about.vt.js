import React from 'react';
import { graphql } from 'gatsby';

import Index from '../components/index';

const AboutVT = ({ data, uri }) => {
  const { nodes: news } = data.allMarkdownRemark;

  return (
    <>
      <h1>About vt</h1>
      <Index
        uri={uri}
        news={news}
        yml={data.dataYaml}
        heroImg={data.file.childImageSharp.fluid}
      />
    </>
  );
};

export const query = graphql`
  query AboutVTQuery {
    file(base: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataYaml(page: { eq: "index" }) {
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
          description
          title
          language
        }
      }
    }
  }
`;

export default AboutVT;
