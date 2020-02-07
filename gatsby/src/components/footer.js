import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ coaImg, travisImg, lang, data }) => {
  const text = data.text.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter.components.footer;

  return (
    <footer className="usa-footer" role="contentinfo">
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div className="mobile-lg:grid-col-auto">
                <div className="grid-row grid-gap-2">
                  <div className="grid-col-auto">
                    <Img
                      fluid={coaImg}
                      className="usa-footer__logo-img"
                      fadeIn={false}
                      alt="City of Austin Seal"
                    />
                  </div>
                  <div className="grid-col-auto">
                    <Img
                      fluid={travisImg}
                      className="usa-footer__logo-img"
                      fadeIn={false}
                      alt="Travis County Seal"
                    />
                  </div>
                </div>
              </div>
              <div className="mobile-lg:grid-col-auto">
                <h3 className="usa-footer__logo-heading">{text.title}</h3>
                <p>
                  <Link to={text.about_link}>{text.about_text}</Link>
                </p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                <div className="grid-col-auto">
                  <a
                    className="usa-social-link usa-social-link--facebook"
                    href="https://www.facebook.com/Austin-Travis-County-Complete-Count-Committee-289680787280/"
                    target="_blank"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a
                    className="usa-social-link fa-at"
                    href="mailto:census@traviscountytx.gov"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      style={{
                        height: "100%",
                        width: "100%",
                        padding: ".75rem",
                      }}
                    />
                    <span>Email</span>
                  </a>
                </div>

                {/* <div className="grid-col-auto">
                  <a
                    className="usa-social-link usa-social-link--twitter"
                    href="/"
                  >
                    <span>Twitter</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a
                    className="usa-social-link usa-social-link--youtube"
                    href="/"
                  >
                    <span>YouTube</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a className="usa-social-link usa-social-link--rss" href="/">
                    <span>RSS</span>
                  </a>
                </div> */}
              </div>
              <h3 className="usa-footer__contact-heading">{text.contact_us}</h3>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-12 margin-y-2">
                    <a href="tel:1-512-854-6185">512-854-6185</a>
                  </div>
                  <div className="grid-col-12">
                    <a href="mailto:census@traviscountytx.gov">
                      census@traviscountytx.gov
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default props => (
  <StaticQuery
    render={data => <Footer data={data} {...props} />}
    query={graphql`
      query {
        text: allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "text" } } }
        ) {
          edges {
            node {
              frontmatter {
                components {
                  footer {
                    title
                    about_text
                    about_link
                    contact_us
                  }
                }
                language
              }
              fields {
                sourceName
              }
            }
          }
        }
      }
    `}
  />
);
