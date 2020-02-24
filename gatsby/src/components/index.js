import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import circle from "uswds_images/circle-124.png";
import Layout from "../components/layout";
import Hero from "./index/Hero";
import Communities from "./index/Communities";
import Timeline from "./shared/Timeline";
import QuickLinks from "./index/QuickLinks";
import MainText from "./index/MainText";
import { useHelmetTags } from "./shared/helmet";

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

        <Communities lang={language} />
      </Layout>
    </>
  );
};

Index.propTypes = propTypes;

export default Index;
