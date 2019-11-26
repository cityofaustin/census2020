import React from 'react';
import { graphql } from 'gatsby';

import Index from '../components/index';

const AboutES = ({ data, uri }) => {
  const { nodes: news } = data.allMarkdownRemark;

  return (
    <Index
      uri={uri}
      news={news}
      yml={data.dataYaml}
      heroImg={data.file.childImageSharp.fluid}
    />
  );
};

// @TODO: Replace
export const query = graphql`
  query AboutEsQuery {
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
          description
          title
          language
        }
      }
    }
  }
`;

export default AboutES;
