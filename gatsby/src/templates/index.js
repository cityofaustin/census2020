import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/index';

const IndexTemplate = ({ location, uri, data, ...rest }) => {
  const {
    childImageSharp: { fluid: heroImg },
  } = data.file;
  const { nodes: news } = data.allMarkdownRemark;
  const content = data.indexYaml;

  return (
    <Index
      uri={uri}
      location={location}
      news={news}
      content={content}
      heroImg={heroImg}
      {...rest}
    />
  );
};

export const query = graphql`
  query IndexByLang($lang: String) {
    file(base: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indexYaml(language: { eq: $lang }) {
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
    allMarkdownRemark(filter: { frontmatter: { language: { eq: $lang } } }) {
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

export default IndexTemplate;
