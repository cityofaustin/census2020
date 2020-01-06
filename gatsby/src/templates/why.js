import React from "react";
import { graphql } from "gatsby";
import Why from "../components/why";

const WhyTemplate = ({ location, uri, data, mapImg, ...rest }) => {
  return (
    <Why uri={uri} location={location} data={data} mapImg={mapImg} {...rest} />
  );
};

export const query = graphql`
  query WhyByLang($lang: String) {
    whyYaml(language: { eq: $lang }) {
      title
      body
      htc_section {
        title
        body
      }
    }
    mapImg: file(base: { eq: "map_screenshot.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default WhyTemplate;
