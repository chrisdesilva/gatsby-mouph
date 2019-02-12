import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/favicon.png"

const Header = ({ siteTitle }) => (
  <header className="bg-black flex justify-center lg:justify-start pl-5 lg:p-0 mb-1" >
    <div className="flex items-center h-16">
      <div className="lg:flex-1">
      <Link
        to="/"
        className ="text-white no-underline mx-2"
      >
        <img src={logo} className="h-12" />
      </Link>
      </div>
      <div className="hidden lg:flex-1"></div>
      <div className="flex items-center mx-2">
        <Link
          to="/thebanisters"
          className ="navLink hidden lg:inline text-white text-center no-underline mx-4 text-2xl"
        >
          THE BANISTERS
        </Link>
        <Link
          to="/lip"
          className ="navLink hidden lg:inline text-white text-center no-underline mx-4 text-2xl"
        >
          LIP
        </Link>
        <Link
          to="/youthandcanvas"
          className ="navLink hidden lg:inline text-white text-center no-underline mx-4 text-2xl"
        >
          YOUTH & CANVAS
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
