import React from "react";
import { graphql } from "gatsby";
import Info from "../components/info";

const WhyTemplate = ({ location, uri, data, mapImg, ...rest }) => {
  return (
    <Info
      uri={uri}
      location={location}
      data={data}
      mapImg={mapImg}
      yaml="whyYaml"
      {...rest}
    />
  );
};

export const query = graphql`
  query WhyByLang($lang: String) {
    whyYaml(language: { eq: $lang }) {
      title
      intro
      sections {
        component
        title
        text
        cta
      }
    }
    mapImg: file(base: { eq: "StrategyMapScreenshot.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default WhyTemplate;
