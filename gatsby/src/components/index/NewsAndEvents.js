import React from "react";
import moment from "moment";
import _ from "lodash";

import Icon from "@mdi/react";
import { mdiNewspaper } from "@mdi/js";
import { mdiCalendarStar } from "@mdi/js";
import { StaticQuery } from "gatsby";

const renderMonth = (month, news) => {
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

const NewsAndEvents = ({ data, language }) => {
  const news = data.allMarkdownRemark.nodes;
  const newsByLanguage = _.filter(
    news,
    item => item.frontmatter.language === language
  );

  const recentNews = _.takeRight(
    newsByLanguage,
    data.site.siteMetadata.events.defaultVisible
  );
  const newsByMonth = _.groupBy(recentNews, newsItem =>
    moment(newsItem.frontmatter.date).format("MMMM YYYY")
  );

  const newsTitle = _.find(
    data.allIndexYaml.edges,
    item => item.node.language === language
  ).node.layout.latestNews;

  return (
    <div>
      <section className="grid-container usa-section">
        <div className="grid-row">
          <div className="grid-col-12 tablet:grid-col-6">
            <div className="grid-row grid-gap">
              <div className="grid-col">
                <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
                  <div>
                    <Icon path={mdiNewspaper} title="News Story" size={2.5} />
                  </div>
                  {newsTitle}
                </h2>
              </div>
              {Object.keys(newsByMonth)
                .reverse()
                .map(month => {
                  return renderMonth(month, newsByMonth[month]);
                })}
            </div>
          </div>
          <div className="grid-col-12 tablet:grid-col-6 margin-top-5 tablet:margin-top-0">
            <div className="grid-col">
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
                <div>
                  <Icon path={mdiCalendarStar} title="Events" size={2.5} />
                </div>
                Events
              </h2>
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
        site {
          siteMetadata {
            events {
              defaultVisible
            }
          }
        }
        allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
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
        allIndexYaml {
          edges {
            node {
              language
              layout {
                latestNews
              }
            }
          }
        }
      }
    `}
    render={data => <NewsAndEvents data={data} {...props} />}
  />
);
