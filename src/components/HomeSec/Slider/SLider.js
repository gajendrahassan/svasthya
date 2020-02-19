import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import SlideContent from './slidecontent'
class Slider extends Component {
    render() {
        return (
            <SlideWrap>

<SlideContent/>

                
            </SlideWrap>
        );
    }
}

export default Slider;

const animatedBackground = keyframes`

from {
    background-size:100%;
  }
  to {
    background-size:130%;
  }

`



const SlideWrap = styled.div`
margin-top:-13%;
height:120vh;
width:100%;
background-image:url('https://cdn.shopify.com/s/files/1/1315/0213/t/4/assets/bg_slide_2.jpg?v=5419772146659976645');
background-size:cover;
background-position: 0px 0px;
  background-repeat: repeat-x;
  animation: ${animatedBackground} 20s linear infinite alternate;
    background-size:100%;
    position:relative;

@media(max-width:960px){
  margin-top: -115%;
    height: 200vh;

  
}


`