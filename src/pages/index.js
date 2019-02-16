import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import lip from "../images/LIP-banner.jpg"
import thebanisters from "../images/BanistersBus-min-banner.jpg"
import youth from "../images/YouthBW-banner.jpg"

const pageinfo = [
  {
    bandName: "LIP",
    src: lip,
    to: "/lip",
    alt: "band hanging out in front of blue brick wall"
  },
  {
    bandName: "THE BANISTERS",
    src: thebanisters,
    to: "/thebanisters",
    alt: "band hanging out in front of art bus"
  },
  {
    bandName: "YOUTH & CANVAS",
    src: youth,
    to: "/youthandcanvas",
    alt: "band playing rock music on stage"
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`booking`, `mouph`, `austin`]} />
      {pageinfo.map( (band) => {
        return <div key={band.bandName} className="flex justify-center mt-5">
          <Link 
            to={band.to}
            className="text-black text-center text-5xl m-auto no-underline mx-2"  
          >
            <span className="navLink">{band.bandName}</span>
            <img className="w-full my-5 round-lg" src={band.src} alt={band.alt} />
          </Link>
        </div>
      })}
      

   </Layout>
)

export default IndexPage
