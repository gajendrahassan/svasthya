import React from "react"
import { Link } from "gatsby"
import Slider from '../components/HomeSec/Slider/SLider'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ParallaxProvider } from 'react-scroll-parallax';
import HelpSec from '../components/HomeSec/howitshelp/helpmain'
import ParalaxSec from '../components/HomeSec/paralaxSec/paralax'
import GallerySec from '../components/HomeSec/gallerySec/galleryBaner'
import MainText from '../components/HomeSec/middleTextSec/middletext'
import SpecSec from '../components/HomeSec/specSec/specban'
import AboutSec from '../components/HomeSec/AboutSec/about'
import ContactSec from '../components/HomeSec/contactSec/contactBan'
import ClientSec from '../components/HomeSec/clientSec/client'
import Blogs from '../components/HomeSec/blog/blogs'


import WatchFeatureSec from '../components/HomeSec/featureSec/watchslide';
const IndexPage = () => (
  <Layout>
  <SEO title="Swasthy watch" />

<Slider/>
<ParallaxProvider>

<WatchFeatureSec/>
<ParalaxSec />

<HelpSec/>
<GallerySec/>
<MainText/>
<SpecSec/>

<AboutSec/>
<Blogs/>
<ClientSec/>
<ContactSec/>

</ParallaxProvider>

  </Layout>
)

export default IndexPage
