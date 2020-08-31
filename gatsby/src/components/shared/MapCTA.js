import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const text = {
  en: {
    title: "Historically Undercounted Communities in Austin and Travis County",
    text: `Texas is at risk of an even larger undercount in 2020. Today, 25%
              of Texans, or over 6 million people, live in hard-to-count
              neighborhoods, where past self-response rates have been relatively
              low. Today in Travis County, 32% (over 370,000 people) of the
              population live in hard-to-count neighborhoods. An undercount
              means Texas is not getting its fair share of funding and
              representation since not everyone living in our state was counted.
              View the map below to see if your neighborhood is at risk of being
              undercounted.`,
    cta: "Explore the map",
  },
  es: {
    title: `Comunidades históricamente contadas de menos en Austin y el Condado de
      Travis`,
    text: `Texas está en riesgo de que el conteo de menos en el 2020 sea mayor. Hoy,
      el 25% de los texanos, o más de 6 millones de personas, viven en
      vecindarios difíciles de contar donde las respuestas voluntarias pasadas
      han sido relativamente bajas. Hoy, en el Condado de Travis, el 32% (más de
      370,000 personas) de la población vive en vecindarios difíciles de contar.
      Ser contado de menos significa que Texas no está recibiendo su porción
      justa de fondos y representación porque no todos los que viven en nuestro
      estado fueron contados. Vea en el mapa abajo si su vecindario está en
      riesgo de ser contado de menos.`,
    cta: "Explore el mapa",
  },
};
const MapCTA = ({ data, lang }) => {
  return (
    <section className="usa-section bg-primary-darker text-white">
      <div className="grid-container">
        <div className="grid-row">
          <div className="tablet:grid-col-7 padding-right-4">
            <h2 className="font-ui-xl">{text[lang].title}</h2>
            <p className="font-body-md line-height-sans-5">{text[lang].text}</p>
          </div>
          <div className="tablet:grid-col-5 text-center margin-top-3">
            <p className="usa-sr-only">
              For assistance with this map please call{" "}
              <a href="tel:1-512-854-6185">512-854-6185</a> or email{" "}
              <a href="mailto:census@traviscounty.org">
                census@traviscounty.org
              </a>
              .
            </p>
            <a
              href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=66c1f6bdf2034bd898db56d964125573"
              target="_blank"
            >
              <Img
                fluid={data.mapImg.childImageSharp.fluid}
                style={{ width: "100%" }}
                alt="screen grab of Hard to Count Map"
              />
            </a>
            <a
              href="https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=66c1f6bdf2034bd898db56d964125573"
              target="_blank"
            >
              <button className="margin-top-3 usa-button usa-button usa-button--big">
                {text[lang].cta}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MapCTA {
        mapImg: file(base: { eq: "StrategyMapScreenshot.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MapCTA data={data} {...props} />}
  />
);
