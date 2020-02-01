import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Banner, SkipNav } from "uswds-react";
import "./layout.css";
import Header from "./header";
import Footer from "./footer";
import { IntlProvider } from "react-intl";
import { getCurrentLangKey } from "ptz-i18n";
const languages = require("../data/languages.js");

const mainContent = "main-content";

const headerPages = [
  {
    text: {
      en: "WHY THE CENSUS MATTERS",
      es: "POR QUÉ ES IMPORTANTE EL CENSO",
      vt: "TẠI SAO ĐIỀU TRA DÂN SỐ LẠI QUAN TRỌNG",
    },
    link: "/why",
  },
  {
    text: { en: "How To Take The Census", es: "COMO", vt: "Tiếng Việt" },
    link: "/how",
  },
  {
    text: {
      en: "Get Involved",
      es: "PERMANEZCA CONECTADO",
      vt: "GIỮ KẾT NỐI",
    },
    link: "/get-involved",
  },
];

const Layout = ({ children, language, location, data }) => {
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
              header {
                secondaryLinks {
                  text
                  link
                }
              }
            }
          }
          coaLogo: file(base: { eq: "austin-seal.png" }) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          travisLogo: file(base: { eq: "travis-county.png" }) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        let langKey = "en";

        if (typeof window !== `undefined`) {
          const url = location.pathname;
          const { langs, defaultLangKey } = data.site.siteMetadata.languages;
          langKey = getCurrentLangKey(langs, defaultLangKey, url);
          // TODO: implement home link by language
          // const homeLink = `/${langKey}`.replace(
          //     `/${defaultLangKey}/`,
          //     '/'
          // )
        }

        return (
          <IntlProvider locale={langKey}>
            <SkipNav skipsTo={mainContent} />
            <Banner />
            <div className="usa-overlay" />
            <Header language={langKey} {...data.site.siteMetadata} />
            <main id={mainContent} role="main">
              {children}
            </main>
            <Footer
              lang={language}
              coaImg={data.coaLogo.childImageSharp.fluid}
              travisImg={data.travisLogo.childImageSharp.fluid}
            />
          </IntlProvider>
        );
      }}
    />
  );
};

export default Layout;
