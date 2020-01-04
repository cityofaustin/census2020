import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import Img from "gatsby-image";

import FaqAccordion from "../components/faq.js";

import Icon from "@mdi/react";
import { mdiEmailOutline, mdiLaptopWindows, mdiPhone } from "@mdi/js";

const iconMap = {
  mdiStar: mdiEmailOutline,
  mdiLaptopWindows: mdiLaptopWindows,
  mdiPhone: mdiPhone,
};

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
  data: PropTypes.object,
};

const Why = ({ uri, location, data, mapImg, ...rest }) => {
  const { title, language, body, htc_section } = data.whyYaml;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <section className="grid-container usa-section usa-prose">
          <div className="margin-bottom-5 usa-prose">
            <h1>{title}</h1>
            {body.map((p, i) => (
              <p key={`why-p-${i}`}>{p}</p>
            ))}
          </div>
        </section>
        <section className="usa-section bg-primary-dark text-white">
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-col-7 padding-right-4">
                <h2 className="font-ui-xl">{htc_section.title}</h2>
                <p className="font-body-md line-height-sans-5">
                  {htc_section.body}
                </p>
              </div>
              <div className="grid-col-5 text-center margin-top-3">
                <a
                  href="https://www.censushardtocountmaps2020.us/"
                  target="_blank"
                >
                  <Img
                    fluid={data.mapImg.childImageSharp.fluid}
                    style={{ width: "100%" }}
                  />
                </a>
                <a
                  href="https://www.censushardtocountmaps2020.us/"
                  target="_blank"
                >
                  <button className="usa-button usa-button--inverse usa-button--big">
                    Explore the map
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <FaqAccordion />
      </Layout>
    </>
  );
};

Why.propTypes = propTypes;

export default Why;
