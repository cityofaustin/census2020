import React from "react";
import moment from "moment";
import _ from "lodash";

import Icon from "@mdi/react";
import { mdiNewspaper } from "@mdi/js";
import { mdiCalendarStar } from "@mdi/js";
import { Link, StaticQuery, graphql } from "gatsby";

const renderNewsByMonth = (month, news) => {
  return (
    <div key={`month-${month}`}>
      <h2>{month}</h2>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {news.map((post, i) => {
          return (
            <li key={`news-${month}-${i}`} className="margin-bottom-2">
              <div className="grid-row">
                <div className="grid-col-auto padding-right-2">
                  <Icon path={mdiNewspaper} title="News Story" size={1.25} />
                </div>
                <div className="grid-col">
                  <a
                    className="font-heading-l margin-top-0 text-sub"
                    href={post.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [{post.frontmatter.source}] {post.frontmatter.title}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const renderEventByMonth = (month, event) => {
  return (
    <div key={`event-month-${month}`}>
      <h2>{month}</h2>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {event.map((event, i) => {
          return (
            <li key={`event-${month}-${i}`} className="margin-bottom-2">
              <div className="grid-row">
                <div className="grid-col-auto padding-right-2">
                  <Icon path={mdiCalendarStar} title="event" size={1.25} />
                </div>
                <div className="grid-col">
                  {event.node.rsvplinkurl ? (
                    <a
                      className="font-heading-l margin-top-0 text-sub"
                      href={event.node.rsvplinkurl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [{moment(event.node.eventdate).format("ddd M/D")}]{" "}
                      {event.node.eventtitle}
                    </a>
                  ) : (
                    <span className="font-heading-l">
                      [{moment(event.node.eventdate).format("ddd M/D")}]{" "}
                      {event.node.eventtitle}
                    </span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const NewsAndEvents = ({ data, lang, shortened, content }) => {
  const EVENTS_VISIBLE = 8;
  const NEWS_VISIBLE = 5;

  const news = data.allMarkdownRemark.nodes;
  const newsByLanguage = _.filter(
    news,
    item => item.frontmatter.language === lang
  );

  const recentNews = shortened
    ? _.takeRight(newsByLanguage, NEWS_VISIBLE)
    : newsByLanguage;
  const newsByMonth = _.groupBy(recentNews, newsItem =>
    moment(newsItem.frontmatter.date).format("MMMM YYYY")
  );

  const layoutText = content.node.frontmatter.components.newsAndEvents;

  const upcomingEvents = data.allGoogleSheetFormResponses1Row.edges.filter(
    // Filter events from current date going forward
    event => moment(event.node.eventdate).format() >= moment().format()
  );

  const allEvents = _.sortBy(data.allGoogleSheetFormResponses1Row.edges, o =>
    moment(o.node.eventdate)
  );

  const upcomingEventsSorted = _.sortBy(upcomingEvents, [
    o => moment(o.node.eventdate),
  ]);

  const events = shortened
    ? _.take(upcomingEventsSorted, EVENTS_VISIBLE)
    : allEvents;

  const eventByMonth = _.groupBy(events, eventItem =>
    moment(eventItem.node.eventdate).format("MMMM YYYY")
  );

  return (
    <div>
      <section className="grid-container usa-section">
        <div className="grid-row">
          <div className="grid-col-12 tablet:grid-col-6 tablet:padding-right-2">
            <div className="grid-col">
              <div className="tablet:margin-bottom-0 text-center">
                <Icon
                  path={mdiCalendarStar}
                  title={layoutText.events}
                  size={2.5}
                />
                <h2 className="font-heading-xl margin-top-0 ">
                  {layoutText.events}
                </h2>
              </div>
              {Object.keys(eventByMonth).map(month =>
                renderEventByMonth(month, eventByMonth[month])
              )}
              <div className="display-flex flex-justify-center margin-top-4">
                <div className="">
                  {shortened ? (
                    <Link
                      className="usa-button usa-button--outline"
                      to={`/${lang}/news-and-events`}
                    >
                      {layoutText.showMore} {layoutText.events}
                    </Link>
                  ) : null}
                </div>
                <div className="">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSefdoZoZ-agx_0Kll26DD0KMl5WuoF-lPD4m0lM0YWsvFKv8A/viewform"
                    target="_blank"
                  >
                    <button className="usa-button ">
                      {layoutText.newEvent}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col-12 tablet:grid-col-6 margin-top-5 tablet:margin-top-0 tablet:padding-left-2">
            <div className="grid-row grid-gap">
              <div className="grid-col">
                <div className="tablet:margin-bottom-0 text-center">
                  <Icon
                    path={mdiNewspaper}
                    title={layoutText.latestNews}
                    size={2.5}
                  />
                  <h2 className="font-heading-xl margin-top-0">
                    {layoutText.latestNews}
                  </h2>
                </div>
                {Object.keys(newsByMonth)
                  .reverse()
                  .map(month => {
                    return renderNewsByMonth(month, newsByMonth[month]);
                  })}
                <div className="display-flex flex-justify-center margin-top-4">
                  {shortened ? (
                    <Link
                      className="usa-button usa-button--outline"
                      to={`/${lang}/news-and-events`}
                    >
                      {layoutText.showMore} {layoutText.latestNews}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: ASC }
          filter: { frontmatter: { type: { eq: "news_story" } } }
        ) {
          totalCount
          nodes {
            id
            html
            excerpt
            frontmatter {
              date
              language
              link
              source
              title
              type
            }
          }
        }
        newsAndEventsContent: allMarkdownRemark(
          filter: { frontmatter: { page: { eq: "homepage" } } }
        ) {
          edges {
            node {
              frontmatter {
                language
                components {
                  newsAndEvents {
                    latestNews
                    events
                    showMore
                    newEvent
                  }
                }
              }
            }
          }
        }
        allGoogleSheetFormResponses1Row(
          filter: { confirmed: { eq: true } }
          sort: { fields: eventdate, order: ASC }
        ) {
          edges {
            node {
              eventdate
              eventtitle
              eventdescription
              locationaddress
              locationname
              starttime
              confirmed
              rsvplinkurl
            }
          }
        }
      }
    `}
    render={data => (
      <NewsAndEvents
        content={data.newsAndEventsContent.edges.find(
          edge => edge.node.frontmatter.language === props.lang
        )}
        data={data}
        {...props}
      />
    )}
  />
);
