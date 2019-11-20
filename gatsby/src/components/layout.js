import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Banner, SkipNav } from 'uswds-react';
import './layout.css';
import Header from './header';
import Footer from './footer';

const mainContent = 'main-content';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            header {
              navigation {
                title
                items {
                  text
                  link
                }
              }
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
    render={data => (
      <div>
        <SkipNav skipsTo={mainContent} />
        <Banner />
        <div className="usa-overlay" />
        <Header {...data.site.siteMetadata} />
        <main id={mainContent}>{children}</main>
        <Footer logoImg={data.openAustinLogo.childImageSharp.fluid} />
      </div>
    )}
  />
);

export default Layout;
