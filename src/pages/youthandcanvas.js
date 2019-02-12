import React from "react"
import { Link } from "gatsby"
import Bandpage from "../components/Bandpage"
import photo from "../images/YouthColor.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const YouthAndCanvas = (props) => (
  <Layout>
    <SEO title="Youth & Canvas" />
    <Bandpage
      alt={"Youth & Canvas playing on stage"}
      bandName={"YOUTH & CANVAS"}
      src={photo}
      bio={'Youth & Canvas formed in 2016 after Cash (guitar/vocals) and Shane (drums) moved to Austin from St. Louis and St. Paul, respectively, to persue music. Cash posted an ad looking for a drummer, Shane responded, and the rest is history. Their first EP was released in May of 2017, and their debut album was wrapped up in June the following year. They’ve made a name for themselves through widespread social media promotions, touring as much as possible, and putting on lively, foot-stomping performances. Their rowdy, gritty, fuzzy, hard rock style is influenced by such bands as The White Stripes, DFA1979, The Graveltones, Black Pistol Fire, and has been described as “garage rock gut-punched by the blues.”'}
      spotify={"https://open.spotify.com/embed/artist/3eCLCmoMffc5EdqAdOhE3Y"}
      url={"https://www.facebook.com/youthandcanvas/"}
      website={"YOUTHANDCANVAS.COM"}
    />
  </Layout>
)

export default YouthAndCanvas
