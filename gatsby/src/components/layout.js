import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';
import Footer from './footer';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

const mainContent = 'main-content';

const Layout = ({ children, language, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
              title
              header {
                secondaryLinks {
                  text
                  link
                }
                navigation {
                  en {
                    link
                    text
                  }
                  es {
                    text
                    link
                  }
                  vt {
                    text
                    link
                  }
                }
              }
            }
          }
          openAustinLogo: file(base: { eq: "open-austin-logo.png" }) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        let langKey = 'en';

        if (typeof window !== `undefined`) {
          const url = location.pathname;
          const { langs, defaultLangKey } = data.site.siteMetadata.languages;
          langKey = getCurrentLangKey(langs, defaultLangKey, url);
          // TODO: implement home link by language
          const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        }

        return (
          <IntlProvider locale={langKey}>
            <SkipNav skipsTo={mainContent} />
            <Banner />
            <div className="usa-overlay" />
            <Header {...data.site.siteMetadata} language={langKey} />
            <main id={mainContent}>{children}</main>
            <Footer logoImg={data.openAustinLogo.childImageSharp.fluid} />
          </IntlProvider>
        );
      }}
    />
  );
};

export default Layout;
