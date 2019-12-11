import React from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import MailIcon from '@material-ui/icons/Mail'
import StarIcon from '@material-ui/icons/Star'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'

// TODO: i18n
const events = [
    {
        date: 'MARCH 12-20',
        title: 'Invitations Mailed',
        body:
            'Invitations to complete the 2020 census questionnaire online will be mailed.',
        icon: <MailIcon />,
    },
    {
        date: 'MARCH 16-24',
        title: 'Reminder Letters',
        body: 'Reminder letters will be mailed.',
        icon: <MailIcon />,
    },
    {
        date: 'MARCH 26 - APRIL 3',
        title: 'Reminder Postcard',
        body: 'Reminder postcard will be mailed.',
        icon: <FeaturedPlayListIcon />,
    },
    {
        date: 'APRIL 1',
        title: 'Census Day',
        body: 'Census Day!',
        icon: <StarIcon />,
    },
    {
        date: 'APRIL 8-16',
        title: 'Hard Copy Census Mailed',
        body: 'Another reminder and hard copy questionnaire will be mailed.',
        icon: <MailIcon />,
    },
    {
        date: 'APRIL 20-27',
        title: 'Final Postcards Mailed',
        body: 'Final postcards will be mailed before an in-person follow-up.',
        icon: <FeaturedPlayListIcon />,
    },
]

export default function Timeline() {
    return (
        <section className="bg-primary-lighter padding-top-3 padding-bottom-3">
            <h2 className="text-center font-ui-3xl">When is the Census?</h2>
            <p className="text-center font-serif-xl">
                Don’t Delay! Be sure to fill out your census form before April
                30th.
            </p>
            <VerticalTimeline>
                {events.map(event => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={event.date}
                            iconStyle={{ background: '#1A4480', color: '#fff' }}
                            icon={event.icon ? event.icon : <StarIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {event.title}
                            </h3>
                            <div>{event.body}</div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}
