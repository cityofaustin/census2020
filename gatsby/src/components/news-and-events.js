import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import NewsAndEvents from "./index/NewsAndEvents";
import { langs } from "../data/languages";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
};

const Events = ({ location, pageContext }) => {
  const title = "Census 2020 News and Events";
  // const language = "en";
  const { lang } = pageContext;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{title}</title>
      </Helmet>
      <Layout language={lang} location={location}>
        <NewsAndEvents lang={lang} />
      </Layout>
    </>
  );
};

Events.propTypes = propTypes;

export default Events;
