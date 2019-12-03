import React from 'react';
import ReactDOM from 'react-dom';

export const onClientEntry = () => {
  try {
    require('uswds_polyfills');
  } catch (e) {
    // do nothing
  }
};

// Can re-install gatsby-plugin-react-axe on updated publish
// https://github.com/angeloashmore/gatsby-plugin-react-axe/pull/1
export const onInitialClientRender = async (_, pluginOptions = {}) => {
  const { showInProduction, axeOptions } = {
    showInProduction: false,
    axeOptions: {},
    ...pluginOptions,
  };

  if (process.env.NODE_ENV === 'development' || showInProduction) {
    const { default: axe } = await import('react-axe');
    axe(React, ReactDOM, 1000, axeOptions);
  }
};
