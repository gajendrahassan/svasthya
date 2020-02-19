import React from 'react';
import styled from 'styled-components'
import {ParallaxBanner} from 'react-scroll-parallax';
const AImage = (props) => {
    return (
        
       <AimageWrap className="container-fluid">

<div className="imgContainer">

<ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://api.vold.io/pictures/5b2b6e2c3d55f82c91fc1356/homepage/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg',
            amount: 0.2,
        }
    ]}
    style={{
        height: '600px',
        width:'500px'
    }}
/>

    
    </div>


       </AimageWrap>
    );
};


const AimageWrap = styled.div`

width:100%;
z-index: 23!important;
position:absolute;

`
export default AImage;