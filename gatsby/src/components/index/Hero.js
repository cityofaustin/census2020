import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function Hero(props) {
  const { img, callout } = props;

  return (
    <section className="usa-hero">
      <Img fluid={img} className="usa-hero__image" fadeIn={false} />
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h2 className="usa-hero__heading">{callout.title}</h2>
          <p>{callout.text}</p>
          <Link className="usa-button" to={callout.cta.link}>
            {callout.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
