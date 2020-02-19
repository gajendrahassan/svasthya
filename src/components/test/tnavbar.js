import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import {TimelineMax, TimelineLite, Power0} from 'gsap'
import $ from 'jquery'
const Snavbar = (props) => {



useEffect(()=>{

    var tl = new TimelineMax({paused:true});

    tl.to(".navst", 0.2, {marginLeft:"-10px"  }, 0).to(".l1, .l3", 0.3, {scaleX:0.2, transformOrigin:"right", ease:Power0.easeOut},  0);
    
    $(".navst").on("mouseenter", function(){
      tl.play();
    });
    
    $(".navst").on("mouseleave", function(){
      tl.reverse();
    });

})


    return (
        
      <SnavWrap>
<div className="navst">

<div className="container">
    <div className="row">
        <div className="col-sm-12  mt-3">

<div className="tbtn" class="em1" id="em">
<span class="l1"></span>
<span class="l2"></span>
<span class="l3"></span>
</div>

        </div>
        <div className="col-sm-12 mt-3">

        <h6 className="mt-2">MENU</h6>

        </div>
    </div>
</div>


</div>
<div className="booking"></div>


      </SnavWrap>
    );
};

const SnavWrap = styled.div`

position:absolute;
top:10%;
right:0;
width:70px;
height:180px;
background-color:black;
z-index:222;

.navst{
overflow:hidden;

    height:100%;
    background-color:#f5f5f5;
    cursor: pointer;


    h6{

        -webkit-transform: rotate(-90deg); 
        transform: rotate(-90deg); 
        font-size:14px;
        letter-spacing:3;
        font-weight:400;
           }

         .tbtn{

cursor: pointer;
padding:15px;



         } 

         span{

height:1px;
background-color:#333333;
width:100%;
display:block;
margin:8px 0;


}
}
.booking{


    background-color:#323037;
    width:100%;
    height:100%;
}
`
export default Snavbar;