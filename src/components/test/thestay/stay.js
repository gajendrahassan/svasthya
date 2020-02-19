import React from 'react';
import styled from 'styled-components'
import StayGallery from './staygallery'
const Stay = (props) => {
    return (
        
        <StayWrap className="container-fluid py-5">

<div className="container">

<div className="row">
    <div className="col-sm-4 offset-sm-4">

        <div className="staycontent text-center">
            <h2 className="">THE STAY</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ea blanditiis commodi.</p>
        </div>
    </div>

    <div className="col-sm-12">
        <StayGallery/>
    </div>
</div>

</div>


        </StayWrap>
    );
};

const StayWrap = styled.div`

position:relative;
.staycontent{

    /* position: absolute; */
width:100%;
    /* top:50px;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:223; */

    h2{

   font-weight:800;
   font-size:8rem;
  background-image: url('https://ontrip.in/wp-content/uploads/2016/10/IMG-20161011-WA0003-840x560.jpg');
  background-attachment:fixed;
   -webkit-background-clip: text;  
   background-clip: text;
   color: transparent;
    }
}


background: linear-gradient(180deg, #f5f5f5 70%, #323037 70%) !important;



`
export default Stay;