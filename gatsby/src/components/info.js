import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Layout from "./layout";

import Timeline from "./shared/Timeline";
import FaqAccordion from "../components/faq.js";

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
  console.log(data[yaml]);
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
        <section className="grid-container usa-section usa-prose">
          <div className="margin-bottom-5 usa-prose">
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
                <section className="grid-container usa-section usa-prose">
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
          }
        })}
      </Layout>
    </>
  );
};

Info.propTypes = propTypes;

export default Info;
