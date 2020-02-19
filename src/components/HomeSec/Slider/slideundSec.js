import React from 'react';
import styled from 'styled-components';
import { MdLocationOn  } from "react-icons/md";
import { FaRegHeart, FaRegClock  } from "react-icons/fa";

const componentName = (props) => {


    let SlidUndData = [
        
        {
title:"Health discovery on the go",
icon:<MdLocationOn/>
},
{
    title:"Pay per use health care model ",
    icon:<FaRegHeart/>
    },
    {
        title:"Non-Invasive Diabetes Management",
        icon:<FaRegClock/>
        }]

    return (
        
       <SlideUndWrap>
  <div className="containerfluid ">

<div className="container">

<div className="row">


    <div className="col-sm-3 fcontent ">
<h3 className="">XTRA</h3>
<h5 className=" text-dark font-weight-bold">FEATURES</h5>

    </div>



    {
       SlidUndData.map((item, index)=>{

return(<>


  <div className="col-sm-3">

<div className="row">
    <div className="col-sm-5 iconsvg">{item.icon}</div>
    <div className="col-sm-7 iconp"><p>{item.title}</p></div>
</div>


      
  </div>


</>)

       }) 
    }
  

</div>

</div>

</div>

       </SlideUndWrap>
    );
};


const SlideUndWrap = styled.div`

clip-path: polygon(50% 24%, 100% 0, 100% 100%, 0 100%, 0 0);
padding-top:5%;
padding-bottom:3%;

z-index:21;
content:"";
background-color:#f4f4f4;
position:absolute;
bottom:0;
width:100%;

#iconsvg{

width:100%;

  
    border:1px solid grey;
    font-size:16px;
 

}
.iconp > p{

font-family:var(--TextFont);
color:#333333;
font-size:12px;
margin-top:7px;
padding:5px;
letter-spacing:1px;
text-transform:uppercase;


}



 .iconp{

    border-right:0.5px dotted grey;


}
.iconsvg > svg {

    font-size: 25px;
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    padding: 18px;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 1px #dad5d5;
    color: grey;
    font-weight:200;


}

.fcontent{

    border-right:0.5px dotted grey;

padding:2px 40px;
    h3{

        font-size:32px;
        font-weight:200;
        text-align:right;
        color:grey;
        font-family:var(--HeadingFont);
        
    }

    h5{
        text-align:right; 
               color:grey;
               letter-spacing:2px;

    }
}

@media(max-width:960px){


    clip-path: polygon(50% 10%,100% 0,100% 100%,0 100%,0 0);
    padding-top: 15%;



    

}


`
export default componentName;