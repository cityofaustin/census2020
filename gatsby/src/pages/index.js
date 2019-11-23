import React, { Component } from 'react';
// import { Redirect } from '@reach/router'; // highlight-line
import { navigate } from '@reach/router';

export default class IndexPage extends Component {
  componentDidMount() {
    // TODO: Check browser default language and redirect
    navigate('/en/');
  }
  render() {
    return <></>;
  }
}
