import React from 'react';
import styled from 'styled-components'
import Heading2 from '../../../global/heading2';
import bg from '../../../images/bg2.jpg'
import GallerySection from '../gallerySec/gallery'
import { ParallaxBanner } from 'react-scroll-parallax';

const GalleryBanner = (props) => {
    return (
        
        <GalleryBannerWrap className="container-fluid p-0 " id="section3" style={{zIndex:22}} >



<ParallaxBanner
    className="bg"
    layers={[
        {
            image: `${bg}`,
            amount: 0.5,
        }
    ]}
    style={{
        height: '100%',
    }}
 
>

<div className="container insidepg">
                <div className="row">
                    <div className="col-sm-2"> </div>
<div className="col-sm-8">
    
<Heading2 />

<GallerySection/>
    
    
     </div>
<div className="col-sm-2"> </div>
                    
                </div>
            </div>

</ParallaxBanner>



          



        </GalleryBannerWrap>
    );
};

const GalleryBannerWrap = styled.div`

.insidepg{

    padding:5rem 0;
    position: inherit;
    z-index:22;
}

.bg{

position:relative;
&::before{

width:100%;
position:absolute;
content:"";
height:100%;
background-color:rgba(0,0,0,0.8);
z-index:1;


}
}




`
export default GalleryBanner;