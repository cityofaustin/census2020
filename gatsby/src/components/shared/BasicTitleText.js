import React from "react";
import ReactMarkdown from "react-markdown/with-html";

const BasicTitleText = ({ data, lang }) => {
  return (
    <section className="usa-section grid-container padding-top-3 padding-bottom-3">
      <h2 className="text-center font-heading-xl">{data.title}</h2>
      <div className="usa-intro grid-row padding-y-4">
        <div className="grid-col-10 grid-offset-1">
          <ReactMarkdown source={data.text} escapeHtml={false} />
        </div>
      </div>
      <div className="grid-row">
        {data.cta && (
          <div className="text-center grid-col">
            <a
              className="usa-button usa-button--big"
              target="_blank"
              href={data.cta_link}
            >
              {data.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BasicTitleText;
