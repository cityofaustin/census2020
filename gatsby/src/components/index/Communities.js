import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import "./communities.css";

//   i18n TODO: these titles need to be translated
const columns = [
  { title: "Hispanic/Latino Community Group", link: "/", img: "latinx" },
  {
    title: "Asian American Community Group",
    link: "https://www.facebook.com/groups/402255943807939/",
    img: "asianAmerican",
  },
  {
    title: "Black African-American Community Group",
    link: "https://www.facebook.com/CompleteCount/",
    img: "africanAmerican",
  },
  { title: "Student Community Groups", link: "/", img: "student" },
  {
    title: "Community Experiencing Homelessness",
    link: "/",
    img: "student",
  },
];

const Communities = ({ data }) => {
  return (
    <>
      <section className="bg-primary-dark padding-top-3 padding-bottom-3">
        <div className="grid-container margin-bottom-4">
          <h2 className="text-white text-center font-ui-xl tablet:font-ui-2xl">
            Stand up and be counted in the 2020 Census
          </h2>

          <div className="grid-row padding-y-2 padding-x-105 flex-justify-center">
            {columns.map((col, i) => (
              <div className="grid-col-6 tablet:grid-col-4" key={`ccc-${i}`}>
                <a href={col.link} target="_blank">
                  <div className="bg-base-darkest margin-1">
                    <Img
                      fluid={data[col.img].childImageSharp.fluid}
                      fadeIn={false}
                      className="Communities--imageStyles"
                    />
                  </div>
                  <h3 className="text-base-lightest margin-x-3 font-body-xs tablet:font-body-md Communities--textStyles">
                    {col.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
          <div className="grid-row usa-intro text-white">
            <p className="font-body-lg">
              This Spring, every Travis County resident holds the power to shape
              the future of our neighborhoods, schools, and local government. It
              will take every community - no matter how small or large - to help
              get everyone counted.
            </p>
          </div>
        </div>
      </section>
      <section className="usa-section grid-container padding-top-3 padding-bottom-3">
        <h2 className="text-center font-ui-3xl">
          Organize In Your Neighborhood
        </h2>
        <p className="text-italic usa-intro">
          Want to help get folks counted in your community? Help organize in one
          of our local hard to count communities or your neighborhood. Click
          here to find out more…
        </p>
        <div className="grid-row">
          <div className="grid-col-8 grid-offset-2">
            <a href="https://www.censushardtocountmaps2020.us/" target="_blank">
              <Img
                fluid={data.mapImg.childImageSharp.fluid}
                style={{
                  maxHeight: "600px",
                  width: "100%",
                }}
              />
            </a>
            <div className="text-center">
              <a
                href="https://www.censushardtocountmaps2020.us/"
                target="_blank"
              >
                <button className="usa-button usa-button--outline usa-button--big">
                  Explore the map
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        latinx: file(base: { eq: "bailadores.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        asianAmerican: file(base: { eq: "asian-american-festival.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        africanAmerican: file(base: { eq: "census2.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        student: file(base: { eq: "aisd-students.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mapImg: file(base: { eq: "map_screenshot.png" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Communities data={data} {...props} />}
  />
);
