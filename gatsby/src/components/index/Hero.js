import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import logo from "../../images/census20-logo.png";

const Hero = ({ img, content }) => {
  const { cta, text, title } = content.node.frontmatter.hero;
  return (
    <section className="usa-hero padding-top-2 desktop:padding-y-6">
      <div className="grid-col-12 text-center padding-bottom-10">
        <div className="desktop:display-none margin-bottom-2">
          <a
            href={cta.link}
            target="_blank"
            className="usa-button usa-button--big grid-col-auto"
            style={{ margin: "auto" }}
          >
            {cta.text}
          </a>
        </div>
        <img
          src={logo}
          alt="ATX Census 2020 - Together, We Count."
          style={{ maxWidth: "200px", backgroundColor: "#f0f0f0b8" }}
          className="desktop:display-none"
        />
      </div>
      <Img
        fluid={img}
        className="usa-hero__image"
        fadeIn={false}
        alt="Crowd of individuals representing the diversity of age, gender, race and ethnicities in Austin"
      />
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading">{title}</h1>
          {text.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {/* <a className="usa-button" target="_blank" href={cta.link}>
            {cta.text}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        homepageData: allMarkdownRemark(
          filter: { frontmatter: { page: { eq: "homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                hero {
                  cta {
                    link
                    text
                  }
                  text
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Hero
        content={data.homepageData.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        {...props}
      />
    )}
  ></StaticQuery>
);
