import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "./communities.css";

export default function Communities(props) {
  const { imgs } = props;

  //   i18n TODO: these titles need to be translated
  const columns = [
    { title: "Hispanic / Latino Community", link: "/", img: imgs.latinx },
    {
      title: "Asian-American Community",
      link: "/",
      img: imgs.asianAmerican,
    },
    {
      title: "Black / African-American Community",
      link: "/",
      img: imgs.africanAmerican,
    },
    { title: "Youth & Student Community", link: "/", img: imgs.student },
    {
      title: "Community Experiencing Homelessness",
      link: "/",
      img: imgs.student,
    },
  ];

  const textStyles = {};

  return (
    <section className="bg-primary-dark padding-top-3 padding-bottom-3">
      <h2 className="text-white text-center font-ui-3xl">
        Stand up and be counted with your community.
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
                className="text-base-lightest margin-x-3 font-body-lg"
              >
                {col.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
