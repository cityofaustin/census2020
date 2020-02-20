import React, { useState, useRef } from "react";
import "./Faq.css";
import { StaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

const FAQ = props => {
  const [active, setActive] = useState("false");
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  let toggleAccordion = e => {
    setActive(active === "false" ? "true" : "false");
    setHeight(active === "true" ? "0px" : `${content.current.scrollHeight}px`);
  };

  return (
    <>
      <button
        className="usa-accordion__button"
        aria-expanded={`${active}`}
        aria-controls={props.id}
        onClick={toggleAccordion}
      >
        <p className="font-ui-lg">{props.question}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="font-ui-md padding-y-1 padding-x-5">
          <ReactMarkdown source={props.response} />
        </div>
      </div>
    </>
  );
};

function FaqAccordion({ data, lang }) {
  const text = data.faqData.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components.faq;

  return (
    <div className="usa-accordion bg-base-lightest faq">
      <div className="grid-container">
        <h2 className="faq-heading text-center">{text.title}</h2>

        {text.faqs.map((faq, i) => (
          <FAQ
            id={`faq-${i}`}
            key={`faq-${i}`}
            question={faq.question}
            response={faq.response}
          />
        ))}
      </div>
    </div>
  );
}

export default props => (
  <StaticQuery
    render={data => <FaqAccordion data={data} {...props} />}
    query={graphql`
      query {
        faqData: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "text" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                components {
                  faq {
                    title
                    faqs {
                      question
                      response
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
  />
);
