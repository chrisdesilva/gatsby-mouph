import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="flex flex-col">
          <main>{children}</main>
          <footer className="py-5 w-full bg-grey-light flex justify-center">
            <div>
              © {new Date().getFullYear()} Mouphtaou Artist Management Built with
              {` `}
              <a className="text-black no-underline" href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
