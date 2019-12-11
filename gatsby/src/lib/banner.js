import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { banner } from "uswds_components";
import flag from "uswds_images/favicons/favicon-57.png";
import UswdsComponent from "./uswds_component";
import Accordion from "./accordion";

const propTypes = {
  className: PropTypes.string,
};

const Banner = ({ className }) => {
  const render = ref => (
    <div className={cx("usa-banner", className)} ref={ref}>
      <Accordion>
        <header className="usa-banner__header">
          <div className="usa-banner__inner">
            <div className="grid-col-auto">
              <img
                className="usa-banner__header-flag"
                src={flag}
                alt="U.S. flag"
              />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner__header-text">
                An official website of the City of Austin & Travis County
              </p>
            </div>
          </div>
        </header>
      </Accordion>
    </div>
  );

  return <UswdsComponent uswdsComponent={banner} render={render} />;
};

Banner.propTypes = propTypes;

export default Banner;
