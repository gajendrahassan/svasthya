import React, { Component } from 'react';
import './navbar.css'
import logo from '../images/logo.png';
import {Navbar, Form, Button, FormControl, Nav} from 'react-bootstrap'
import {Link} from 'gatsby';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


class componentName extends Component {




    render() {


        return (  


          <>
              <div id="trigger6" />
  
              <Controller>
    <Scene
   classToggle={"", "aftersc"}
       pin={true}
       triggerHook={0}
        enabled={true}
      >




 <div  id="trigger6" style={{zIndex:222, width:"70%", margin:"auto"}}  >


<Navbar bg="light" id="snav" expand="lg">
  <Navbar.Brand href="#section1">
   


    <img src={logo} alt="logo" width="80px"/>

    
    
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#section1">Home</Nav.Link>
      <Nav.Link href="#section2">Features</Nav.Link>
      <Nav.Link href="#section3">Gallery</Nav.Link>
      <Nav.Link href="#section4">Specs</Nav.Link>
      <Nav.Link href="#section5">Blog</Nav.Link>
      <Nav.Link href="#section6">About Us</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>


{/*        
<nav className="navbar  navs navbar-expand-lg navbar-light bg-light">


  <Link
      to="#section1"
      className="navbar-brand"
      activeStyle={{ color: "red" }}
    ><img src={logo} alt="logo" width="80px"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item ">
      <Link
      to="#section1"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >Home</Link>
      </li>
      <li className="nav-item ">

        <Link
      to="#section2"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >Features</Link>
      </li>
    
      <li className="nav-item">
        <Link
      to="#section3"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >Gallery</Link>
      </li>  
      
      <li className="nav-item">
        <Link
      to="#section4"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >Specs</Link>
      </li>
      <li className="nav-item">
        <Link
      to="#section5"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >Blog</Link>
      </li>

      <li className="nav-item">
        <Link
      to="#section6"
      className="nav-link"
      activeStyle={{ color: "red" }}
    >About US</Link>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
 <button className="btn btn-info">buy now</button>
    </form>
  </div>
</nav> */}



         

            </Scene>
</Controller>
</>
            
        );
    }
}

export default componentName;