import React from 'react';
import styled from 'styled-components'
const HeadingSec = (props) => {
    return (
        
      <HeadingWraap >

<h2 className={`${props.color}`}>SVASTHYA</h2><span  id="ex">TM</span>
    <h1 className={`${props.color}`}>{props.title || "IS SMARTER"}</h1>
    {/* <button className={`${props.btncolor} ${props.color} ${props.bordercolor} custom-btn`} >{props.btntxt|| "HOW ITS HELP"}</button> */}



      </HeadingWraap>
    );
};

const HeadingWraap = styled.div`

position: relative;
 h2{

        font-weight:200;
        font-family:var(--HeadingFont);
        color:#676767;
        display:inline-block;
       
    
    }

    #ex{

font-size:10px;
top:1%;
padding:0 5px;
font-weight:600;

color:#676767;
 position:absolute;
   
}
  

h1{

    font-family:var(--HeadingFont);
 color:#333333;  
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
