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
  const content = data.indexYaml;

  return (
    <Index
      uri={uri}
      location={location}
      content={content}
      images={[heroImg1, heroImg2]}
      events={data.site.siteMetadata.events}
      {...rest}
    />
  );
};

export const query = graphql`
  query IndexByLang($lang: String) {
    site {
      siteMetadata {
        events {
          defaultVisible
        }
      }
    }
    image1: file(base: { eq: "Diversity-min.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(base: { eq: "bassist.jpeg" }) {
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
        link
        icon
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
  }
`;

export default IndexTemplate;
