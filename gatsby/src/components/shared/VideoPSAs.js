import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiLaptopWindows, mdiLinkVariant } from "@mdi/js";
import Youtube from "react-youtube";

const VideoPSAs = ({ data, lang, imgs }) => {
  const content = data.allMarkdownRemark.edges.filter(
    item => item.node.frontmatter.language === lang
  )[0].node.frontmatter;

  const { videos, title } = content;

  return (
    <section className="bg-primary-dark padding-top-3 padding-bottom-3">
      <div className="grid-container margin-bottom-4">
        <h2 className="text-white text-center font-ui-xl tablet:font-ui-2xl">
          {title}
        </h2>

        <div className="grid-row grid-gap-2">
          {videos.map(video => (
            <div className="grid-col-12 desktop:grid-col-6 padding-bottom-2">
              <Youtube videoId={video.youtubeId} opts={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "video_psas" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                language
                component
                videos {
                  youtubeId
                  group
                }
              }
            }
          }
        }
      }
    `}
    render={data => <VideoPSAs data={data} {...props} />}
  />
);
