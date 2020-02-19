/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from '../global/navbar'
import Footer from '../global/footer'
import TopBar from '../global/topbar'
import styled from 'styled-components';
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <LayoutWrap >

    <TopBar/>
   <Navbar/>


        <main>{children}</main>
        <Footer/>
       
    </LayoutWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrap = styled.div`


`
export default Layout
