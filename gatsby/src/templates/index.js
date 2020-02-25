import React from "react";
import { graphql } from "gatsby";
import Index from "../components/index";

const IndexTemplate = ({ location, uri, data, ...rest }) => {
  const {
    childImageSharp: { fluid: heroImg1 },
  } = data.image1;
  const {
    childImageSharp: { fluid: heroImg2 },
  } = data.image2;
  const content = data.homepageData;

  return (
    <Index
      uri={uri}
      location={location}
      content={content}
      images={[heroImg1, heroImg2]}
      {...rest}
    />
  );
};

export const query = graphql`
  query IndexByLang($lang: String) {
    image1: file(base: { eq: "Diversity-min.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(base: { eq: "Diversity-min.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homepageData: allMarkdownRemark(
      filter: {
        frontmatter: { page: { eq: "homepage" }, language: { eq: $lang } }
      }
    ) {
      edges {
        node {
          frontmatter {
            body {
              content
              title
            }
            hero {
              cta {
                link
                text
              }
              text
              title
            }
            components {
              quickLinks {
                icon
                link
                text
                title
              }
            }
            layout {
              title
              nav {
                link
                order
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
