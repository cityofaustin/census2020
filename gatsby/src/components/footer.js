import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Footer = ({ coaImg, travisImg }) => {
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
                <h3 className="usa-footer__logo-heading">
                  Austin-Travis County Census 2020
                </h3>
                <p>
                  <Link to="/en/about">About the Local Campaign</Link>
                </p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                <div className="grid-col-auto">
                  <a
                    className="usa-social-link usa-social-link--facebook"
                    href="/"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="grid-col-auto">
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
                </div>
              </div>
              <h3 className="usa-footer__contact-heading">
                Census Contact Center
              </h3>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:info@agency.gov">info@agency.gov</a>
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

export default Footer;
