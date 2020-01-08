import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "./communities.css";

export default function Communities(props) {
  const { imgs } = props;

  //   i18n TODO: these titles need to be translated
  const columns = [
    { title: "Hispanic/Latino Community Group", link: "/", img: imgs.latinx },
    {
      title: "Asian American Community Group",
      link: "/",
      img: imgs.asianAmerican,
    },
    {
      title: "Black African-American Community Group",
      link: "/",
      img: imgs.africanAmerican,
    },
    { title: "K-12 Students", link: "/", img: imgs.student },
    {
      title: "College Students",
      link: "/",
      img: imgs.student,
    },
  ];

  const textStyles = {};

  return (
    <>
      <section className="bg-primary-dark padding-top-3 padding-bottom-3">
        <h2 className="text-white text-center font-ui-3xl">
          Stand up and be counted in the 2020 Census
        </h2>

        <div className="grid-row padding-y-2 padding-x-105">
          {columns.map((col, i) => (
            <div className="grid-col-12 tablet:grid-col" key={`ccc-${i}`}>
              <Link className="" to={col.link}>
                <div className="bg-base-darkest margin-1">
                  <Img
                    fluid={col.img}
                    fadeIn={false}
                    className="Communities--imageStyles"
                  />
                </div>
                <h3
                  style={textStyles}
                  className="text-base-lightest margin-x-3 font-body-lg Communities--textStyles"
                >
                  {col.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid-container margin-bottom-4">
          <div className="grid-row usa-intro text-white">
            <p>
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
                fluid={props.mapImg.fluid}
                style={{ maxHeight: "600px", width: "100%" }}
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
}
