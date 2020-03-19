import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import Layout from "./layout";
import Timeline from "./shared/Timeline";
import FaqAccordion from "../components/faq.js";
import Communities from "./index/Communities";
import NewsAndEvents from "./index/NewsAndEvents";
import EmailCollection from "./emailCollection";
import OrganizeMap from "./index/OrganizeMap";
import BasicTitleText from "./shared/BasicTitleText";
import { useHelmetTags } from "./shared/helmet";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
  data: PropTypes.object,
};

function URLify(string) {
  return string
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

const Info = ({ uri, location, data, yaml, ...rest }) => {
  const { title, language } = useHelmetTags(uri, data[yaml]);

  let intro = data[yaml].intro;
  let sections = data[yaml].sections;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <section className="grid-container usa-prose">
          <div className="margin-y-5 usa-prose">
            <h1>{title}</h1>
            <ReactMarkdown source={intro} />
          </div>
        </section>
        {sections.map((section, i) => {
          switch (section.component) {
            case "Text":
              return (
                <section
                  className="grid-container usa-prose margin-y-5"
                  key={`Info-sections-${i}`}
                  id={URLify(section.title)}
                >
                  <h2 id={URLify(section.title)}>{section.title}</h2>
                  {typeof section.text === "string" ? (
                    <ReactMarkdown source={section.text} />
                  ) : (
                    section.text.map((p, i) => (
                      <p
                        key={`Info-Text-p-${i}`}
                        dangerouslySetInnerHTML={{ __html: p }}
                      ></p>
                    ))
                  )}
                </section>
              );
            case "TableOfContents":
              return (
                <section
                  className="grid-container margin-bottom-5 usa-prose"
                  key={`Info-sections-${i}`}
                >
                  <ul>
                    {sections.map((section, i) => {
                      if (section.component === "TableOfContents") return false;
                      return (
                        <li key={`TableOfContents-${i}`}>
                          <a href={`#${URLify(section.title)}`}>
                            {section.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            case "Timeline":
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <Timeline lang={language} />
                </span>
              );
            case "FAQ":
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <FaqAccordion lang={language} />
                </span>
              );
            case "MapCta":
              return (
                <section
                  className="usa-section bg-primary-darker text-white"
                  key={`Info-sections-${i}`}
                  id={URLify(section.title)}
                >
                  <div className="grid-container">
                    <div className="grid-row">
                      <div className="tablet:grid-col-7 padding-right-4">
                        <h2 className="font-ui-xl">{section.title}</h2>
                        <p className="font-body-md line-height-sans-5">
                          {section.text}
                        </p>
                      </div>
                      <div className="tablet:grid-col-5 text-center margin-top-3">
                        <p className="usa-sr-only">
                          For assistance with this map please call{" "}
                          <a href="tel:1-512-854-6185">512-854-6185</a> or email{" "}
                          <a href="mailto:census@traviscounty.org">
                            census@traviscounty.org
                          </a>
                          .
                        </p>
                        <a
                          href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=66c1f6bdf2034bd898db56d964125573"
                          target="_blank"
                        >
                          <Img
                            fluid={data.mapImg.childImageSharp.fluid}
                            style={{ width: "100%" }}
                            alt="screen grab of Hard to Count Map"
                          />
                        </a>
                        <a
                          href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=66c1f6bdf2034bd898db56d964125573"
                          target="_blank"
                        >
                          <button className="margin-top-3 usa-button usa-button usa-button--big">
                            {section.cta}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              );
            case "Communities":
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <Communities lang={language} />
                </span>
              );
            case "EmailCollection":
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <div className="text-center margin-bottom-8">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfPL2i9v87W7tYXjl6mJtDuvL0bmuAVQFQfN-SCeamb3KxZhQ/viewform"
                      target="_blank"
                      className="usa-button usa-button usa-button--big"
                    >
                      Volunteer for Census Outreach
                    </a>
                  </div>
                </span>
              );
            case "NewsAndEvents":
              // TODO: don't hard code the language
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <NewsAndEvents lang={language} shortened />
                </span>
              );
            case "OrganizeMap":
              return <OrganizeMap lang={language} />;
            case "BasicTitleText":
              return <BasicTitleText lang={language} data={section} />;
          }
        })}
      </Layout>
    </>
  );
};

Info.propTypes = propTypes;

export default Info;
