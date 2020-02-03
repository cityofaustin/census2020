import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import NewsAndEvents from "./index/NewsAndEvents";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
};

const Events = ({ location }) => {
  const title = "Census 2020 News and Events";
  const language = "en";

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <NewsAndEvents lang={language} />
      </Layout>
    </>
  );
};

Events.propTypes = propTypes;

export default Events;
