import React from "react";
import { StaticQuery, graphql } from "gatsby";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import StarIcon from "@material-ui/icons/Star";
import MailIcon from "@material-ui/icons/Mail";
import TodayIcon from "@material-ui/icons/Today";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const iconMap = {
  mail: <MailIcon />,
  calendar: <TodayIcon />,
  star: <StarIcon />,
  people: <GroupAddIcon />,
  postcard: <FeaturedPlayListIcon />,
};

const Timeline = ({ text }) => {
  const { events, header } = text.node.frontmatter;
  const { title, subtitle } = header;

  return (
    <section className="bg-primary-lighter padding-top-3 padding-bottom-3">
      <div className="grid-container">
        <h2 className="text-center font-ui-3xl">{title}</h2>
        <p className="text-center font-serif-xl">{subtitle}</p>
        <VerticalTimeline>
          {events.map((event, i) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={event.date.toUpperCase()}
                iconStyle={{ background: "#1A4480", color: "#fff" }}
                icon={event.icon ? iconMap[event.icon] : <StarIcon />}
                key={`event-${i}`}
              >
                <h3 className="vertical-timeline-element-title">
                  {event.title}
                </h3>
                <div>{event.body}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query TimelineQuery {
        allMarkdownRemark(
          filter: { frontmatter: { component: { eq: "timeline" } } }
        ) {
          edges {
            node {
              fields {
                sourceName
              }
              frontmatter {
                language
                component
                header {
                  title
                  subtitle
                }
                events {
                  date
                  body
                  title
                  icon
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Timeline
        text={data.allMarkdownRemark.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        {...props}
      />
    )}
  />
);
