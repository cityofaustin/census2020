import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";

import Layout from "./layout";
import Timeline from "./shared/Timeline";
import FaqAccordion from "../components/faq.js";
import Communities from "./index/Communities";
import NewsAndEvents from "./index/NewsAndEvents";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
  data: PropTypes.object,
};

const generateTableOfContents = sectionsArray => {
  return (
    <section className="grid-container usa-section usa-prose">
      <ul>
        {sectionsArray.map(section => {
          if (section.component === "TableOfContents") return false;
          return (
            <li>
              <a href={`#${section.title}`}>{section.title}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Info = ({ uri, location, data, yaml, ...rest }) => {
  let title = data[yaml].title;
  let language = data[yaml].language;
  let body = data[yaml].body;
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
            {body &&
              body.map((p, i) => (
                <p
                  key={`Info-p-${i}`}
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              ))}
          </div>
        </section>
        {sections.map(section => {
          switch (section.component) {
            case "Text":
              return (
                <section className="grid-container usa-prose margin-bottom-5">
                  <h2 id={section.title}>{section.title}</h2>
                  {section.text.map((p, i) => (
                    <p
                      key={`Info-p-${i}`}
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></p>
                  ))}
                </section>
              );
            case "TableOfContents":
              return generateTableOfContents(sections);
            case "Timeline":
              return (
                <span id={section.title}>
                  <Timeline />
                </span>
              );
            case "FAQ":
              return (
                <span id={section.title}>
                  <FaqAccordion />
                </span>
              );
            case "MapCta":
              return (
                <section className="usa-section bg-primary-darker text-white">
                  <div className="grid-container">
                    <div className="grid-row">
                      <div className="tablet:grid-col-7 padding-right-4">
                        <h2 className="font-ui-xl">{section.title}</h2>
                        <p className="font-body-md line-height-sans-5">
                          {section.text}
                        </p>
                      </div>
                      <div className="tablet:grid-col-5 text-center margin-top-3">
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
                          <button className="usa-button usa-button usa-button--big">
                            Explore the map
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              );
            case "Communities":
              return <Communities />;
            case "EmailCollection":
              // TODO: Make this actually submit somewhere
              return (
                <section className="usa-section bg-primary text-center text-white display-flex flex-column flex-align-center">
                  <h3>
                    Sign-up for email updates from the Austin-Travis County
                    Census campaign.
                  </h3>
                  <form className="usa-form" style={{ width: "80%" }}>
                    <label className="usa-label" for="input-type-text">
                      E-mail address
                    </label>
                    <input
                      className="usa-input"
                      id="input-type-text"
                      name="input-type-text"
                      type="text"
                    />
                    <input
                      className="usa-button usa-button--outline usa-button--inverse"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </section>
              );
            case "NewsAndEvents":
              // TODO: don't hard code the language
              return <NewsAndEvents language={"en"} />;
          }
        })}
      </Layout>
    </>
  );
};

Info.propTypes = propTypes;

export default Info;
