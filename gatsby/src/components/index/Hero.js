import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Hero(props) {
  const { img, callout } = props;

  return (
    <section className="usa-hero">
      <Img
        fluid={img}
        className="usa-hero__image"
        fadeIn={false}
        alt="Crowd of individuals representing the diversity of age, gender, race and ethnicities in Austin"
      />
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading">{callout.title}</h1>
          {callout.text.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <Link className="usa-button" to={callout.cta.link}>
            {callout.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
