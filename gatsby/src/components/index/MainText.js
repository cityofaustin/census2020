import React from 'react'
import { Link } from 'gatsby'

export default function MainText({ tagline, section }) {
    return (
        <section className="usa-section">
            <div className="grid-container">
                <h2 className="font-ui-3xl margin-y-0">{tagline.title}</h2>
                <span className="usa-intro">
                    {tagline.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                </span>
                <Link
                    className="usa-button usa-button--big"
                    to={section.cta.link}
                >
                    {section.cta.text}
                </Link>
            </div>
        </section>
    )
}
