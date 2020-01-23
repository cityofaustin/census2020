import React from "react";
import { graphql } from "gatsby";
import Events from "../components/events";

const EventsTemplate = ({ location, uri, data, ...rest }) => {
  console.log(data, rest);
  return <Events uri={uri} location={location} data={data} {...rest} />;
};

export const query = graphql`
  query EventsByLang {
    site {
      siteMetadata {
        events {
          defaultVisible
        }
      }
    }
  }
`;

export default EventsTemplate;
