import React from "react";
import { graphql } from "gatsby";
import Info from "../components/info";

const AboutTemplate = ({ location, uri, data, ...rest }) => {
  return (
    <Info
      uri={uri}
      location={location}
      data={data}
      {...rest}
      yaml={"aboutYaml"}
    />
  );
};

export const query = graphql`
  query AboutByLang($lang: String) {
    aboutYaml(language: { eq: $lang }) {
      title
      intro
      sections {
        component
        title
        text
      }
    }
  }
`;

export default AboutTemplate;
