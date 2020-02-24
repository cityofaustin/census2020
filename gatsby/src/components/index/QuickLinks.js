import React from "react";
import chunk from "lodash/fp/chunk";
import { StaticQuery, graphql } from "gatsby";
import Icon from "@mdi/react";
import {
  mdiHandPointingUp,
  mdiYoutubeTv,
  mdiShieldLock,
  mdiBriefcaseAccount,
} from "@mdi/js";

const iconMap = {
  finger: mdiHandPointingUp,
  job: mdiBriefcaseAccount,
  watch: mdiYoutubeTv,
  secure: mdiShieldLock,
};

const QuickLinks = ({ media, content }) => {
  const { quickLinks } = content.node.frontmatter.components;
  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        {chunk(2, quickLinks).map((pairs, idx) => (
          <div key={idx} className="usa-graphic-list__row grid-row grid-gap">
            {pairs.map(({ title, text, link, icon }, idx) => (
              <div key={idx} className="usa-media-block tablet:grid-col">
                <Icon
                  path={iconMap[icon]}
                  title={icon}
                  size={3}
                  color="white"
                  className="usa-media-block__img"
                />

                <a href={link} target="_blank" className="text-no-underline">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">{title}</h3>
                    <p>{text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query QuickLinksQuery {
        homepageData: allMarkdownRemark(
          filter: { frontmatter: { page: { eq: "homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                components {
                  quickLinks {
                    title
                    text
                    link
                    icon
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <QuickLinks
        content={data.homepageData.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        {...props}
      />
    )}
  />
);
