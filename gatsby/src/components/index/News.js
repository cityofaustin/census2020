import React from "react";

export default function News({ layout, news }) {
  return (
    <div>
      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
              {layout.latestNews}
            </h2>
          </div>
          {news && (
            <div className="tablet:grid-col-8 usa-prose">
              <ul>
                {news.map((newsPost, i) => (
                  <li key={`news-${i}`}>
                    <a
                      className="font-heading-l margin-top-0"
                      href={newsPost.frontmatter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {newsPost.frontmatter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
