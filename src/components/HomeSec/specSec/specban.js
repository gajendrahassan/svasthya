import React from 'react';
import styled from 'styled-components'
import Heading from '../../../global/heading'
import bg from '../../../images/bg2.jpg'
import HandAnim from './hand'

const Specban = (props) => {


let specdata1 = [{

    title:"SIZE AND DIMENSIONS",
    content:"2.5” x 2.0” x 0.8” (51.0 x 51.0 x 17.0 mm) "
},
{

    title:`DISPLAY SIZE. WXH
    `,
    content:`1.2” (30.4 mm)
    `
},{

    title:`WEIGHT`,
    content:`2.3 oz / 66 g
    `
},{

    title:`DISPLAY SIZE. WXH`,
    content:`1.2” (30.4 mm)
    `
},{

    title:`DISPLAY TYPE
    `,
    content:`Backlit LCD with the ability to invert
    `
},{

    title:`BATTERY LIFETIME
    `,
    content:`Upto 50 hours (with average use)

    `
},]


let specdata2 = [{

    title:"SIZE AND DIMENSIONS",
    content:"2.5” x 2.0” x 0.8” (51.0 x 51.0 x 17.0 mm) "
},
{

    title:`DISPLAY SIZE. WXH
    `,
    content:`1.2” (30.4 mm)
    `
},{

    title:`WEIGHT`,
    content:`2.3 oz / 66 g
    `
},{

    title:`DISPLAY SIZE. WXH`,
    content:`1.2” (30.4 mm)
    `
},{

    title:`DISPLAY TYPE
    `,
    content:`Backlit LCD with the ability to invert
    `
},{

    title:`BATTERY LIFETIME
    `,
    content:`Upto 50 hours (with average use)

    `
},]



    return (
         
        <SpecWrap className="container-fluid  " id="section4"  style={{backgroundImage:`url(${bg})`}}>

            <div className="container">

<div className="row">
    <div className="col-sm-3 pt-5">
<Heading bgcolor="bg-light" color="text-white" scolor="text-dark" bordercolor="border-light"/>


    </div>
    <div className="col-sm-3 text-right pt-5" style={{borderRight:"1px dotted white"}}>
{

specdata1.map((item, index)=>{

 return <div className="specdata mt-4" key={index}>

<h6>{item.title}</h6>
<p>{item.content}</p>
</div>

})
}
      

    </div>
    <div className="col-sm-3 pt-5">

{

specdata2.map((item, index)=>{

 return <div className="specdata mt-4" key={index}>

<h6>{item.title}</h6>
<p>{item.content}</p>
</div>

})
}

    </div>

    <div className="col-sm-3">

    <HandAnim/>

    </div>
</div>


            </div>

        </SpecWrap>
    );
};


const SpecWrap = styled.div`

position:relative;
overflow:hidden;
background-size:cover;
color:white;
font-family:var(--HeadingFont);

h6{

    font-weight:bold;
    font-size:13px;
    letter-spacing:1px;

}

p{
     font-size:14px;
}
&::before{

    position:absolute;
    top:0;
    left:0;
    content:"";
    width:100%;
    height:100%;
    background-color:rgba(34, 156, 251, 0.78);
    z-index:0;
    
}

`
export default Specban;
