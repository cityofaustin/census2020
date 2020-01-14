import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import circle from "uswds_images/circle-124.png";
import Layout from "../components/layout";
import Hero from "./index/Hero";
import Hashtags from "./index/Hashtags";
import Communities from "./index/Communities";
import Timeline from "./shared/Timeline";
import NewsAndEvents from "./index/NewsAndEvents";
import QuickLinks from "./index/QuickLinks";
import MainText from "./index/MainText";

// useHelmetTags hook uses the uri and callout.title and uses them to
// provide accurate information to the <Helmet>'s <title> and <html> tags
export const useHelmetTags = (uri, callout) => {
  const [title, setTitle] = React.useState("Census for All");
  const [language, setLanguage] = React.useState("en");
  React.useEffect(() => {
    if (callout) setTitle(callout.title);
    if (uri !== "/") setLanguage(uri.substring(1).split("/")[0]);
  }, [callout, uri]);

  return { title, language };
};

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
  const { callout, media, section, tagline, layout } = content;
  const { title, language } = useHelmetTags(uri, callout);
  const heroImg = language === "en" ? images[0] : images[1];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
      </Helmet>
      <Layout language={language} location={location}>
        <Hero img={heroImg} callout={callout} />

        {/* 
          TODO: 
          Make this Hashtag component interactive, link to social media. 
          For now, we'll skip it.
        */}
        {/* <Hashtags /> */}

        <MainText tagline={tagline} section={section} />

        <QuickLinks media={media} circle={circle} />

        <Timeline />

        <Communities lang={language} />
      </Layout>
    </>
  );
};

Index.propTypes = propTypes;

export default Index;
