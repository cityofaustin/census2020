import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';
import Footer from './footer';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
const languages = require('../data/languages.js');

const mainContent = 'main-content';

const languageListing = () => {
  let navigation = {};

  languages.languagesMap.map(lang => {
    navigation[lang.abbr] = [];
    headerPages.map(page => {
      let item = {
        text: page.text[lang.abbr],
        link: `/${lang.abbr}${page.link}`,
      };
      navigation[lang.abbr].push(item);
    });
  });

  return navigation;
};

const headerPages = [
  {
    text: {
      en: 'ABOUT THE 2020 CENSUS',
      es: 'SOBRE EL CENSO',
      vt: 'GIỚI THIỆU VỀ ĐIỀU TRA DÂN SỐ',
    },
    link: '/about',
  },
  {
    text: {
      en: 'WHY THE CENSUS MATTERS',
      es: 'POR QUÉ ES IMPORTANTE EL CENSO',
      vt: 'TẠI SAO ĐIỀU TRA DÂN SỐ LẠI QUAN TRỌNG',
    },
    link: '/why',
  },
  {
    text: {
      en: 'STAY CONNECTED',
      es: 'PERMANEZCA CONECTADO',
      vt: 'GIỮ KẾT NỐI',
    },
    link: '/connect',
  },
  { text: { en: 'HOW', es: 'COMO', vt: 'Tiếng Việt' }, link: '/how' },
];

const langListing = languageListing();

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
            <Header
              navigation={langListing}
              language={langKey}
              {...data.site.siteMetadata}
            />
            <main id={mainContent}>{children}</main>
            <Footer logoImg={data.openAustinLogo.childImageSharp.fluid} />
          </IntlProvider>
        );
      }}
    />
  );
};

export default Layout;
