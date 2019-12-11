import React from 'react'
import chunk from 'lodash/fp/chunk';


export default function QuickLinks({media, circle}) {
    return (
        <section className="usa-graphic-list usa-section usa-section--dark">
          <div className="grid-container">
            {chunk(2, media).map((pairs, idx) => (
              <div
                key={idx}
                className="usa-graphic-list__row grid-row grid-gap"
              >
                {pairs.map(({ title, text }, idx) => (
                  <div key={idx} className="usa-media-block tablet:grid-col">
                    <img
                      className="usa-media-block__img"
                      src={circle}
                      alt="circle"
                    />
                    <div className="usa-media-block__body">
                      <h3 className="usa-graphic-list__heading">{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
    )
}
