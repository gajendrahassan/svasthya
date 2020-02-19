import React from 'react';
import styled from 'styled-components'
import Aimage from './alimage'
import AboutContent from './acontent'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const About = (props) => {
    return (

        // <div  />
      
        <AboveWrap   className="container-fluid py-5 my-5">

<div className="container">
    <div className="row">
        <div className="col-sm-4" id="tg">

      
           <Aimage/> 

        
        </div>
        <div className="col-sm-8">
        <AboutContent/>

        </div>
    </div>
</div> 


  
        </AboveWrap>
    
    );
};

const AboveWrap = styled.div`




`
export default About;