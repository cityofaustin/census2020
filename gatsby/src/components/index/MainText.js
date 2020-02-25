import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const MainText = ({ content }) => {
  const { title, cta, content: text } = content.node.frontmatter.body;
  return (
    <section className="usa-section">
      <div className="grid-container">
        <h2 className="font-ui-3xl margin-y-0">{title}</h2>
        <span className="usa-intro">
          {text.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </span>
        <Link className="usa-button usa-button--big" to={cta.link}>
          {cta.text}
        </Link>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MainText {
        homepageData: allMarkdownRemark(
          filter: { frontmatter: { page: { eq: "homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                body {
                  title
                  content
                  cta {
                    link
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MainText
        content={data.homepageData.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        {...props}
      />
    )}
  />
);
