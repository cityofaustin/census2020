import React from "react";
import { graphql } from "gatsby";
import Info from "../components/info";

const InfoTemplate = ({ location, uri, data, ...rest }) => {
  return (
    <Info
      uri={uri}
      location={location}
      data={data}
      {...rest}
      yaml={"infoYaml"}
    />
  );
};

export const query = graphql`
  query InfoByLang($lang: String) {
    infoYaml(language: { eq: $lang }) {
      title
      intro
      sections {
        component
        title
        text
        cta
        cta_link
      }
    }
  }
`;

export default InfoTemplate;
