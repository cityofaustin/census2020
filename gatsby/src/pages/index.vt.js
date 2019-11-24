import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/index';

const IndexVT = props => {
  const { nodes: news } = props.data.allMarkdownRemark;

  return (
    <Index
      uri={props.uri}
      news={news}
      yml={props.data.dataYaml}
      heroImg={props.data.file.childImageSharp.fluid}
      {...props}
    />
  );
};

export const query = graphql`
  query IndexEVQuery {
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

export default IndexVT;
