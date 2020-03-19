import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const BasicTitleText = ({ data, lang }) => {
  console.log(lang, data);

  return (
    <section className="usa-section grid-container padding-top-3 padding-bottom-3">
      <h2 className="text-center font-heading-xl">{data.title}</h2>
      <p className="usa-intro">{data.text}</p>
      <div className="grid-row">
        {data.cta && (
          <div className="text-center grid-col">
            <a className="usa-button usa-button--big" href={data.cta_link}>
              {data.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BasicTitleText;
