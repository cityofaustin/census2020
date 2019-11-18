import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import USAHeader from "./uswds/usa-header"
import USAFooter from "./uswds/usa-footer"

// import "../../node_modules/uswds/dist/css/uswds.min.css"
// import "../../node_modules/uswds/dist/js/uswds.min.js"

import "../styles/global.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <USAHeader />
        <main>{children}</main>
        <USAFooter />
      </div>
    )
  }
}

export default Layout
