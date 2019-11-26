import React from 'react';
import { graphql } from 'gatsby';

import Index from '../components/index';

const CommunityEN = props => {
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

// @TODO: Replace
export const query = graphql`
  query CommunityENQuery {
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

export default CommunityEN;
