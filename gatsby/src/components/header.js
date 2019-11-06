import React from "react"

// import "./header.scss"
// import "../uswds-2.2.1/js/uswds.js"

export default function Header() {
  return (
    <div>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  className="usa-banner__header-flag"
                  src="/assets/img/us_flag_small.png"
                  alt="U.S. flag"
                />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here’s how you know
                </p>
              </div>
              <button
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner"
              >
                <span className="usa-banner__button-text">
                  Here’s how you know
                </span>
              </button>
            </div>
          </header>
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner"
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-dot-gov.svg"
                  alt="Dot gov"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The .gov means it’s official.</strong>
                    <br />
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you’re on a
                    federal government site.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="/assets/img/icon-https.svg"
                  alt="Https"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br />
                    The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo__text">
                <a href="/" title="Home" aria-label="Home">
                  Project title
                </a>
              </em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav aria-label="Primary navigation" className="usa-nav">
            <button className="usa-nav__close">
              <img src="/assets/img/close.svg" alt="close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <button
                  className="usa-accordion__button usa-nav__link  usa-current"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Current section</span>
                </button>
                <ul id="basic-nav-section-one" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <button
                  className="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-two"
                >
                  <span>Section</span>
                </button>
                <ul id="basic-nav-section-two" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="javascript:void(0)">
                  <span>Simple link</span>
                </a>
              </li>
            </ul>
            <form className="usa-search usa-search--small ">
              <div role="search">
                <label
                  className="usa-sr-only"
                  htmlFor="basic-search-field-small"
                >
                  Search small
                </label>
                <input
                  className="usa-input"
                  id="basic-search-field-small"
                  type="search"
                  name="search"
                />
                <button className="usa-button" type="submit">
                  <span className="usa-sr-only">Search</span>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </header>
      <main id="main-content"></main>
    </div>
  )
}
