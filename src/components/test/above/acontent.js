import React from 'react';
import styled from 'styled-components'
const Acontent = (props) => {
    return (
        
       <AcontentWrap className="container-fluid">

<div className="container">
    <div className="row">
       
        <div className="col-sm-6 offset-sm-3">
<div className="Abcont ">
<h2>
THE<br/>
RESORT
</h2>
<p>
Jannata Resort & Spa is a boutique property with tranquil valley views in the rural village of Sebali, just outside of Ubud.
It is attuned to the surrounding environment through a thoughtful design that respects Bali’s rich artistry and cultural heritage.
</p>
</div>
        </div>
       
    </div>
</div>

       </AcontentWrap>
    );
};

const AcontentWrap = styled.div`

background-color:#D8D6E2;
z-index:-1;
margin-top:-50px;
height:600px;
position:relative;
.Abcont{

width:100%;
    position:absolute;
    top:160px;
   
 
}
`
export default Acontent;