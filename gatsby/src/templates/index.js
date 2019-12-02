import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/index';

const IndexTemplate = ({ location, uri, data, ...rest }) => {
  console.log(data);
  const {
    childImageSharp: { fluid: heroImg1 },
  } = data.image1;
  const {
    childImageSharp: { fluid: heroImg2 },
  } = data.image2;
  const { nodes: news } = data.allMarkdownRemark;
  const content = data.indexYaml;

  return (
    <Index
      uri={uri}
      location={location}
      news={news}
      content={content}
      images={[heroImg1, heroImg2]}
      {...rest}
    />
  );
};

export const query = graphql`
  query IndexByLang($lang: String) {
    image1: file(base: { eq: "census2.jpeg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(base: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
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
