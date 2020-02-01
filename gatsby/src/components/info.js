import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";

import Layout from "./layout";
import Timeline from "./shared/Timeline";
import FaqAccordion from "../components/faq.js";
import Communities from "./index/Communities";
import NewsAndEvents from "./index/NewsAndEvents";
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
  const [emailCollectionFormState, setEmailCollectionFormState] = React.useState({});
  const [emailCollectionFormMessage, setEmailCollectionFormMessage] = React.useState({});

  const handleEmailCollectionInputChange = (e) => {
    setEmailCollectionFormState({ ...emailCollectionFormState, [e.target.name]: e.target.value })
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  let body = data[yaml].body;
  let sections = data[yaml].sections;

  async function handleEmailCollectionSubmit(e) {
    e.preventDefault()
    const form = e.target

    if (!emailCollectionFormState['input-type-email'] || !emailCollectionFormState['input-type-name']) {
      setEmailCollectionFormMessage({color: 'red', content: 'Please provide both your e-mail address and your name.'});
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...emailCollectionFormState,
        }),
      });
      setEmailCollectionFormMessage({color: 'green', content: 'Thanks for signing up!'});
    }
    catch (error) {
      console.error(error);
      setEmailCollectionFormStatus({color: 'red', content: 'An error occurred. Please try again later.'});
    }
  };

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
                  {section.text.map((p, i) => (
                    <p
                      key={`Info-Text-p-${i}`}
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></p>
                  ))}
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
                <section
                  className="padding-y-3 text-center display-flex flex-column flex-align-center"
                  id={URLify(section.title)}
                  key={`Info-sections-${i}`}
                >
                  <h3>
                    Sign-up for email updates from the Austin-Travis County
                    Census campaign.
                  </h3>
                  <form
                    name="email-collection-form"
                    className="usa-form"
                    style={{ width: "80%" }}
                    data-netlify="true"
                    onSubmit={handleEmailCollectionSubmit}
                  >
                    <input type="hidden" name="form-name" value="email-collection-form" />
                    <label className="usa-label" htmlFor="input-type-email">
                      E-mail address
                    </label>
                    <input
                      className="usa-input"
                      id="input-type-email"
                      name="input-type-email"
                      type="text"
                      onChange={handleEmailCollectionInputChange}
                    />
                    <label className="usa-label" htmlFor="input-type-name">
                      Your Name
                    </label>
                    <input
                      className="usa-input"
                      id="input-type-name"
                      name="input-type-name"
                      type="text"
                      onChange={handleEmailCollectionInputChange}
                    />
                    <label className="usa-label" htmlFor="usa-textarea">
                      Which communities could you help volunteer with?
                    </label>
                    <textarea
                      className="usa-textarea"
                      id="usa-textarea"
                      name="usa-textarea"
                      type="text"
                      onChange={handleEmailCollectionInputChange}
                    />
                    <input
                      className="usa-button usa-button--outline"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                  <span style={{paddingTop: 15, height: 15, color: emailCollectionFormMessage['color']}}>
                    {emailCollectionFormMessage['content']}
                  </span>
                </section>
              );
            case "NewsAndEvents":
              // TODO: don't hard code the language
              return (
                <span id={URLify(section.title)} key={`Info-sections-${i}`}>
                  <NewsAndEvents language={"en"} />
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
