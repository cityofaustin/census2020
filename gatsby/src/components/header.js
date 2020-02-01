import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery } from "gatsby";
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

const Header = ({ header, language, data }) => {
  const layoutText = data.navigationData.edges.filter(
    item => item.node.frontmatter.language === language
  )[0].node.frontmatter.layout;

  return (
    <UswdsHeader title={layoutText.title} extended>
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
    render={data => <Header data={data} {...props} />}
    query={graphql`
      query {
        navigationData: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "text" } } }
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
              }
            }
          }
        }
      }
    `}
  />
);
