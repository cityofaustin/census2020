import React from "react";
import chunk from "lodash/fp/chunk";
import Icon from "@mdi/react";
import {
  mdiHandPointingUp,
  mdiClipboardCheckMultiple,
  mdiYoutubeTv,
  mdiShieldLock,
  mdiBriefcaseAccount,
} from "@mdi/js";

const iconMap = {
  finger: mdiHandPointingUp,
  job: mdiBriefcaseAccount,
  watch: mdiYoutubeTv,
  secure: mdiShieldLock,
};

export default function QuickLinks({ media }) {
  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        {chunk(2, media).map((pairs, idx) => (
          <div key={idx} className="usa-graphic-list__row grid-row grid-gap">
            {pairs.map(({ title, text, link, icon }, idx) => (
              <div key={idx} className="usa-media-block tablet:grid-col">
                <Icon
                  path={iconMap[icon]}
                  title={icon}
                  size={3}
                  color="white"
                  className="usa-media-block__img"
                />

                <a href={link} target="_blank" className="text-no-underline">
                  <div className="usa-media-block__body">
                    <h3 className="usa-graphic-list__heading">{title}</h3>
                    <p>{text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
