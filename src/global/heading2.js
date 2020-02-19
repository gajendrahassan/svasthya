import React from 'react';
import styled from 'styled-components'
const HeadingSec = (props) => {
    return (
        
      <HeadingWraap >

<h2>SVASTHYA </h2>
<h1>{props.title || "IMAGES GALLERY"}</h1>



      </HeadingWraap>
    );
};

const HeadingWraap = styled.div`

margin:auto;
width:400px;
 h2{

        font-weight:200;
        font-family:var(--HeadingFont);
        color:#f5f5f5;
       
#ex{

background-color:#f5f5f5;
padding:0 5px;
margin:0 5px;
 color:#111111;  
   
}
      
    }

h1{

    font-family:var(--HeadingFont);
 color:#f5f5f5;  
 font-weight:bolder;
 font: 700 36px "Montserrat", "HelveticaNeue", "Helvetica Neue", sans-serif;
}
   
.custom-btn{

color:grey;
border:2px solid grey;
background-color:transparent;
padding:10px 40px;
text-transform:uppercase;
}   




`
export default HeadingSec;
