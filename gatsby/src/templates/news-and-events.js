import React from "react";
import Events from "../components/news-and-events";

const EventsTemplate = ({ location, uri, ...rest }) => {
  return <Events uri={uri} location={location} {...rest} />;
};
export default EventsTemplate;
