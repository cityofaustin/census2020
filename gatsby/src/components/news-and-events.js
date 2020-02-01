import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import NewsAndEvents from "./index/NewsAndEvents";
import { useHelmetTags } from "./shared/helmet";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
};

const Events = ({ uri, location, data, yaml }) => {
  const { title, language } = useHelmetTags(uri, data[yaml]);

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
