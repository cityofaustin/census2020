import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { mdiEmailOutline, mdiLaptopWindows, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";
import ReactMarkdown from "react-markdown";

import Layout from "./layout";
import Timeline from "./shared/Timeline";
import WarningBanner from "./warningBanner";
import { useHelmetTags } from "./shared/helmet";

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

const How = ({ uri, location, data, ...rest }) => {
  const { intro, options } = data.howYaml;
  const { title, language } = useHelmetTags(uri, data.howYaml);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <section className="grid-container usa-section usa-prose">
          <div className="margin-bottom-5 usa-prose">
            {/* <WarningBanner lang={language} /> */}
            <h1>{title}</h1>
            <ReactMarkdown source={intro} />
          </div>
          <div className="usa-graphic-list__row grid-row grid-gap">
            {options.map(option => (
              <div
                key={option.label}
                className="usa-media-block tablet:grid-col"
              >
                <a href={option.link} target="_blank">
                  <Icon
                    path={iconMap[option.icon]}
                    title={option.icon}
                    size={3}
                  ></Icon>
                </a>

                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">{option.label}</h2>
                  <ReactMarkdown source={option.text} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <Timeline lang={language} />
      </Layout>
    </>
  );
};

How.propTypes = propTypes;

export default How;
