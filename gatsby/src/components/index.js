import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import circle from "uswds_images/circle-124.png";
import Layout from "../components/layout";
import Hero from "./index/Hero";
import Communities from "./index/Communities";
import BasicTitleText from "./shared/BasicTitleText";
import Timeline from "./shared/Timeline";
import QuickLinks from "./index/QuickLinks";
import MainText from "./index/MainText";
import VideoPSAs from "./shared/VideoPSAs";
import { useHelmetTags } from "./shared/helmet";
import MapCTA from "./shared/MapCTA";

const propTypes = {
  uri: PropTypes.string,
  location: PropTypes.object,
  news: PropTypes.array,
  content: PropTypes.object,
  heroImg: PropTypes.object,
  events: PropTypes.object,
};

const Index = ({
  uri,
  location,
  news,
  content,
  images,
  communityImgs,
  mapImg,
  events,
  ...rest
}) => {
  const { callout, media, section, tagline } = content;
  const { title, language } = useHelmetTags(uri, callout);
  const heroImg = language === "en" ? images[0] : images[1];

  const textData = {
    en: {
      title: "The 2020 Census is easy.",
      text:
        "9 Questions in 9 Minutes. You will answer a simple questionnaire about yourself and everyone who is or will be living with you on April 1, 2020. Your home can fill out the Census in three ways: Online, By Phone, and By Mail.",
      cta: "Take the Census NOW!",
      cta_link: "https://my2020census.gov/",
    },
    es: {
      title: "Completar el Censo del 2020 es fácil.",
      text:
        "9 preguntas en 9 minutos. Usted responderá a un formulario sencillo que hace preguntas sobre usted y todas las personas que viven en su hogar el 1 de abril del 2020. Su hogar puede llenar el Censo de tres maneras: En línea, Por teléfono, y Por correo.",
      cta: "Llena el Censo!",
      cta_link: "https://my2020census.gov/",
    },
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <Hero img={heroImg} callout={callout} lang={language} />

        <MainText tagline={tagline} section={section} lang={language} />

        <QuickLinks media={media} circle={circle} lang={language} />

        <Timeline lang={language} />

        <MapCTA lang={language} />

        <Communities lang={language} />

        <VideoPSAs lang={language} />

        {/* <BasicTitleText lang={language} data={textData[language]} /> */}
      </Layout>
    </>
  );
};

Index.propTypes = propTypes;

export default Index;
