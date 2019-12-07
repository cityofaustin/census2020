import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './communities.css';

export default function Communities(props) {
  const { imgs } = props;

  //   i18n TODO: these titles need to be translated
  const columns = [
    { title: 'Latinx Complete Count Committee', link: '/', img: imgs.latinx },
    {
      title: 'Asian American Complete Count Committee',
      link: '/',
      img: imgs.asianAmerican,
    },
    {
      title: 'African American Complete Count Committee',
      link: '/',
      img: imgs.africanAmerican,
    },
    { title: 'Student Complete Count Committee', link: '/', img: imgs.student },
  ];

  const textStyles = {};

  return (
    <section className="bg-primary-dark">
      <div class="grid-row padding-y-2 padding-x-105">
        {columns.map(col => (
          <div class="grid-col-12 tablet:grid-col">
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
    </section>
  );
}
