import React from "react";
import { graphql } from "gatsby";
import How from "../components/how";

const HowTemplate = ({ location, uri, data, ...rest }) => {
  return <How uri={uri} location={location} data={data} {...rest} />;
};

export const query = graphql`
  query HowByLang($lang: String) {
    howYaml(language: { eq: $lang }) {
      title
      intro
      options {
        icon
        text
        label
        link
      }
    }
  }
`;

export default HowTemplate;
