import React from 'react';
import styled from 'styled-components'
const InsideSec = (props) => {
    return (
        
        <InsideSecWrap>


<div className="container">
<div className="row">
    <div className="col-sm-6 ">
<h1 className="text-white text-right">JUST CONNECT &</h1>
<h2 className="text-white  text-right">GET ENTERTAINED
</h2>
<p  className="text-white  text-right">Data sciences based approach changes the paradigm to health sciences, a wholistic view provides gross and subtle variations and patterns in health characteristics based on age, aliment, demography, geography etc. Data clustering and analytics enable deep discovery and prediction capabilities. These are used for predictive, timely medical intervention.

</p>
<button id="customid">view more</button>

    </div>
    <div className="col-sm-6"></div>
</div>

</div>


        </InsideSecWrap>
    );
};

const InsideSecWrap = styled.div`

height:100%;
display:flex;
align-items:center;
#customid{

padding:10px 50px;
background-color:tomato;
color:white;
border:7px solid rgba(0,0,0,0.6);
border-radius:50px;
margin-left:auto;
display:block;




}
`
export default InsideSec;