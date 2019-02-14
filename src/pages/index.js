import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import lip from "../images/LIP-banner.jpg"
import thebanisters from "../images/BanistersBus-min-banner.jpg"
import youth from "../images/YouthBW-banner.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`booking`, `mouph`, `austin`]} />
      <div className="flex justify-center mt-5">
        <Link
          to="/lip"
          className ="text-black text-center text-5xl m-auto no-underline mx-2"
        >
          <span className="navLink">LIP</span>
          <img className="w-full my-5 rounded-lg" src={lip} />
        </Link>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/thebanisters"
          className ="text-black text-center text-5xl m-auto no-underline mx-2"
        >
        <span className="navLink">THE BANISTERS</span>
          <img className="w-full my-5 rounded-lg" src={thebanisters} />
        </Link>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/youthandcanvas"
          className ="text-black text-center text-5xl m-auto no-underline mx-2"
        >
        <span className="navLink">YOUTH & CANVAS</span>
          <img className="w-full my-5 rounded-lg" src={youth} />
        </Link>
      </div>

   </Layout>
)

export default IndexPage
