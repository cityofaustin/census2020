import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { mdiEmailOutline, mdiLaptopWindows, mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";

import Layout from "./layout";
import Timeline from "./shared/Timeline";
import WarningBanner from "./WarningBanner";
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
  const { body, options } = data.howYaml;
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
            <WarningBanner lang={language} />
            <h1>{title}</h1>
            {body.map((p, i) => (
              <p key={`how-p-${i}`}>{p}</p>
            ))}
          </div>
          <div className="usa-graphic-list__row grid-row grid-gap">
            {options.map(option => (
              <div
                key={option.label}
                className="usa-media-block tablet:grid-col"
              >
                <Icon
                  path={iconMap[option.icon]}
                  title={option.icon}
                  size={3}
                ></Icon>

                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">{option.label}</h2>
                  {option.text.map((p, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
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
