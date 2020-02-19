import React from 'react';
import styled from 'styled-components'
import bg from '../../../images/bg.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
import InsideSec from './insideComponent'
const Paralax = (props) => {
    return (
        
        <ParalaxWrap className="container-fluid p-0">

<ParallaxBanner
    className="bg"
    layers={[
        {
            image: `${bg}`,
            amount: 0.1,
        }
    ]}
    style={{
        height: '500px',
    }}
 
>
    <div className="insideSec">

<InsideSec/>

    </div>
</ParallaxBanner>


        </ParalaxWrap>
    );
};

const ParalaxWrap = styled.div`

.bg{

position:relative;

}

.insideSec{
    position:absolute;
    width:100%;
    height:100%;
    background-color:#000000c9;
    color:white;
}

`
export default Paralax;