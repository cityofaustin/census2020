import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
};

const Events = ({ uri, location, language }) => {
  return (
    <>
      <Helmet></Helmet>
      <Layout language={language} location={location}>
        HOWDY
      </Layout>
    </>
  );
};

Events.propTypes = propTypes;

export default Events;
