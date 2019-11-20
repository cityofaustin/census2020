import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/index';

const IndexES = ({ data, uri }) => {
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

export const query = graphql`
  query IndexESQuery {
    file(base: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataYaml(page: { eq: "index_es" }) {
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
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "es" } } }) {
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

export default IndexES;
