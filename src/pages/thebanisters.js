import React from "react"
import { Link } from "gatsby"
import Bandpage from "../components/Bandpage"
import photo from "../images/BanistersDance-min.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TheBanisters = (props) => (
  <Layout>
    <SEO title="The Banisters" />
    <Bandpage
      alt={"The Banisters dancing"}
      bandName={"THE BANISTERS"}
      src={photo}
      bio={'The Banisters are a super decent rock band from Austin, Texas. Friends and work colleagues have described them as \"actually pretty good\" and \"better than I expected\" while promising that despite the recent string of obligatory grandparent birthday celebrations, they\'d definitely come to the next show. The songwriting core started in the summer of 2015 as a mix of co-workers and mutual acquaintances. Blending punk, blues, and psych-rock influences, the fledgling band soon found themselves where most bands unfortunately find themselves- on Craigslist, seeking drums and bass. Netting lukewarm and confusing results on Tinder, the band found solace in the words of Nicholas Sparks, "Love is like the wind, you can\'t see it, but you can feel it." In the winter of 2016, The Banisters felt it. They successfully filled out their rhythm section and began playing shows all around Austin. They’ve since been invited to play with bands in Houston, San Antonio, San Marcos, and the DFW area. Their energetic performances and irresistible rock jams have brought them to various festivals including SXSW and Deep Ellum Arts Fest. The band has been featured on KUTX\'s Song of the Day and was recently awarded The Deli Magazine’s Austin Emerging Artist of the Month.'}
      spotify={"https://open.spotify.com/embed/user/12949512/playlist/49FtTW6xInKhHS2RFHI6q9"}
      url={"https://www.thebanistersmusic.com"}
      website={"THEBANISTERSMUSIC.COM"}
    />
  </Layout>
)

export default TheBanisters
