import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-grey-light" >
    <div className="flex h-16 ">
      <div className="flex-1"></div>
      <div className="flex-1"></div>
      <div className="flex items-center mr-5">
        <Link
          to="/"
          className ="text-black no-underline mr-5"
        >
          Mouph
        </Link>
        <Link
          to="/thebanisters"
          className ="text-black no-underline mr-5"
        >
          The Banisters
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
