import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import close from "uswds_images/close.svg";
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  Navigation,
  Header as UswdsHeader,
} from "uswds-react";

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ header, lang, data, content }) => {
  const layoutText = content.node.frontmatter.layout;
  const { text: ctaText, link: ctaLink } = content.node.frontmatter.hero.cta;

  return (
    <UswdsHeader title={layoutText.title} extended lang={lang}>
      <Navigation>
        <div className="usa-nav__inner">
          <button className="usa-nav__close">
            <img src={close} alt="close" />
          </button>
          <Accordion className="usa-nav__primary" tag="ul">
            {layoutText.nav.map((navGroup, idx) => (
              <li key={idx} className="usa-nav__primary-item">
                {navGroup.length > 1 ? (
                  <React.Fragment>
                    <AccordionButton
                      className={`usa-nav__link ${
                        idx === 0 ? "usa-current" : ""
                      }`}
                      controls={`extended-nav-section-${idx}`}
                    >
                      <span>{navGroup.title}</span>
                    </AccordionButton>
                    <AccordionContent
                      id={`extended-nav-section-${idx}`}
                      tag="ul"
                      className="usa-nav__submenu"
                    >
                      {navGroup.map((navItem, idx) => (
                        <li key={idx} className="usa-nav__submenu-item">
                          <Link to={navItem.link}>{navItem.text}</Link>
                        </li>
                      ))}
                    </AccordionContent>
                  </React.Fragment>
                ) : (
                  <Link className="usa-nav__link" to={navGroup.link}>
                    <span>{navGroup.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </Accordion>
          <div className="usa-nav__secondary">
            {/* <div className="display-flex flex-align-end flex-column margin-bottom-2">
              <a
                href={ctaLink}
                target="_blank"
                className="usa-button usa-button--big margin-right-0"
              >
                {ctaText}
              </a>
            </div> */}
            <ul className="usa-nav__secondary-links">
              {header.secondaryLinks.map((secondaryLink, idx) => (
                <li key={idx} className="usa-nav__secondary-item">
                  <Link to={secondaryLink.link}>{secondaryLink.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Navigation>
    </UswdsHeader>
  );
};

Header.propTypes = propTypes;

export default props => (
  <StaticQuery
    render={data => (
      <Header
        content={data.navigationData.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        data={data}
        {...props}
      />
    )}
    query={graphql`
      query {
        navigationData: allMarkdownRemark(
          filter: { frontmatter: { page: { eq: "homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                layout {
                  title
                  nav {
                    text
                    link
                    order
                  }
                }
                hero {
                  cta {
                    text
                    link
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
