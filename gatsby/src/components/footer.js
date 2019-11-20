import React from "react"
import Img from 'gatsby-image';

const Footer = ({ logoImg }) => {
  return (
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#/">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav">
          <ul className="grid-row grid-gap">
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">
                Primary link
              </a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">
                Primary link
              </a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">
                Primary link
              </a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">
                Primary link
              </a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">
                Primary link
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div className="mobile-lg:grid-col-auto">
              <Img
                fluid={logoImg}
                className="usa-footer__logo-img"
                fadeIn={false}
                alt="Open Austin logo"
              />
              </div>
              <div className="mobile-lg:grid-col-auto">
                <h3 className="usa-footer__logo-heading">Name of Agency</h3>
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
                Agency Contact Center
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
  )
}

export default Footer;
