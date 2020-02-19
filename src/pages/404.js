import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Slide from '../components/test/slider2/slide2';
// import Snav from '../components/test/tnavbar';
// import Above from '../components/test/above/about';
// import Stay from '../components/test/thestay/stay';

// import { ParallaxProvider } from 'react-scroll-parallax';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
{/* <ParallaxProvider>
    <Snav/>
   <Slide/>
   <Above/>
   <Stay/>
   </ParallaxProvider> */}
  </Layout>
)

export default NotFoundPage
