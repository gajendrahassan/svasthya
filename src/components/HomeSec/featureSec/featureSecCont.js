import styled from 'styled-components'

import React, { Component } from 'react';

import FeatureCont2 from './featuresec2'



class FeatureSecCont extends Component {



// state={







// }

 
    render() {

    return (
        
       <FeatureContentWrap className="container-fluid" id="section2">

<div className="row">
    <div className="col-sm-5">

<h2>SVASTHYA</h2>
<button className="custom-btn">Key Features</button>

    </div>
    <div className="col-sm-7"></div>

</div>


<div className="row mt-4">
    <div className="col-sm-12">
<p className="text-secondary">

“Svasthya” is a mobile health preservation platform for an apt and timely real-time care coordination. It monitors user/patient vitals and behaviour real time and generates alerts for appropriate health response from healthcare professionals based on an early warning score for health deviations. The health/emergency response generated by “Svasthya '' enables automated lifesaving and optimal real time care co-ordination. 
<br/>
<br/>

“Svasthya'' maintains a health index that can be dynamically monitored to detect deviation from health trajectory and solicit the required attention from healthcare professionals, user and family
</p>
    </div>
</div>

<div className="container-fluid">


<FeatureCont2/>
   

</div>

       </FeatureContentWrap>
    );
}
};



const FeatureContentWrap = styled.div`

h2{

    color:#111111;
    font-weight:200;
    font-size:2.8rem;
}
.custom-btn{

    color:grey;
    border:2px solid grey;
    background-color:transparent;
    padding:10px 40px;
    text-transform:uppercase;
}

p{

    font-size:15px;
    line-height:2;
    font-weight:400;
    font-family:var(--TextFont);
}


`


export default FeatureSecCont;


