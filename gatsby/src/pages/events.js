import React from "react";
import { graphql } from "gatsby";
import { Redirect } from "@reach/router";
import Layout from "../components/layout";

export default ({
  data: {
    site: {
      siteMetadata: {
        languages: { defaultLangKey, supportedLangs },
      },
    },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      {/* <Layout>Hello</Layout> */}
    </>
  );
};

export const query = graphql`
  query eventsQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          supportedLangs: langs
        }
      }
    }
  }
`;
