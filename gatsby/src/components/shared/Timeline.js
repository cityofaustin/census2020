import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import MailIcon from "@material-ui/icons/Mail";
import StarIcon from "@material-ui/icons/Star";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";

// TODO: i18n
const text = {
  en: {
    header: {
      title: "When is the Census?",
      subtitle:
        "Don’t Delay! Be sure to fill out your census form before April 30th.",
    },
    events: [
      {
        date: "MARCH 12-20",
        title: "Invitations Mailed",
        body:
          "Invitations to complete the 2020 census questionnaire online will be mailed.",
        icon: <MailIcon />,
      },
      {
        date: "MARCH 16-24",
        title: "Reminder Letters",
        body: "Reminder letters will be mailed.",
        icon: <MailIcon />,
      },
      {
        date: "MARCH 26 - APRIL 3",
        title: "Reminder Postcard",
        body: "Reminder postcard will be mailed.",
        icon: <FeaturedPlayListIcon />,
      },
      {
        date: "APRIL 1",
        title: "Census Day",
        body: "Census Day!",
        icon: <StarIcon />,
      },
      {
        date: "APRIL 8-16",
        title: "Hard Copy Census Mailed",
        body: "Another reminder and hard copy questionnaire will be mailed.",
        icon: <MailIcon />,
      },
      {
        date: "APRIL 20-27",
        title: "Final Postcards Mailed",
        body: "Final postcards will be mailed before an in-person follow-up.",
        icon: <FeaturedPlayListIcon />,
      },
    ],
  },
  es: {
    header: {
      title: "¿Cuándo es el Censo?",
      subtitle:
        "¡Hágalo a tiempo! Asegúrese de llenar su formulario del censo antes del 30 de abril.",
    },
    events: [
      {
        date: "12 al 20 de marzo",
        title: "Envío por correo de las invitaciones",
        body:
          "Las invitaciones para completar el cuestionario del censo del 2020 en línea se enviarán por correo regular.",
        icon: <MailIcon />,
      },
      {
        date: "16 al 24 de marzo",
        title: "Envío de cartas de recordatorio",
        body: "Se enviarán cartas de recordatorios por correo.",
        icon: <MailIcon />,
      },
      {
        date: "26 de marzo al 3 de abril",
        title: "Postal de recordatorio",
        body: "Se enviarán postales de recordatorios por correo.",
        icon: <FeaturedPlayListIcon />,
      },
      {
        date: "1 de abril",
        title: "Día del Censo",
        body: "¡Día del Censo!",
        icon: <StarIcon />,
      },
      {
        date: "8 al 16 de abril",
        title: "Envío por correo del formulario del Censo en papel",
        body:
          "Se enviará por correo otro recordatorio y la copia en papel del cuestionario.",
        icon: <MailIcon />,
      },
      {
        date: "20 al 27 de abril",
        title: "Envío por correo de las postales finales",
        body:
          "Se enviarán las postales finales antes de dar seguimiento en persona.",
        icon: <FeaturedPlayListIcon />,
      },
    ],
  },
};

export default function Timeline({ lang }) {
  return (
    <section className="bg-primary-lighter padding-top-3 padding-bottom-3">
      <div className="grid-container">
        <h2 className="text-center font-ui-3xl">{text[lang].header.title}</h2>
        <p className="text-center font-serif-xl">
          {text[lang].header.subtitle}
        </p>
        <VerticalTimeline>
          {text[lang].events.map((event, i) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={event.date}
                iconStyle={{ background: "#1A4480", color: "#fff" }}
                icon={event.icon ? event.icon : <StarIcon />}
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
}
