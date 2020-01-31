import React from "react";
import { graphql } from "gatsby";
import { Redirect } from "@reach/router";

export default ({
  data: {
    site: {
      siteMetadata: {
        languages: { defaultLangKey, supportedLangs },
      },
    },
  },
}) => {
  let lang = defaultLangKey || "en";
  let isLoginTokenRedirect = false;
  if (typeof window !== `undefined`) {
    let userLang = window.navigator.language.slice(0, 2);
    lang = supportedLangs.includes(userLang) ? userLang : lang;
    isLoginTokenRedirect = window.location.hash.includes("token");
  }
  return !isLoginTokenRedirect && <Redirect from="/" to={`/${lang}`} noThrow />;
};

export const query = graphql`
  query languageSettings {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          supportedLangs: langs
        }
      }
    }
  }
`;
