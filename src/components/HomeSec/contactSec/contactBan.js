import React from 'react';
import styled from 'styled-components'
import Heading from '../../../global/heading'
import Cbg from '../../../images/contactbg.jpg'
import { FaHome, FaFacebookF, FaInstagram, FaTwitter,FaGooglePlusG } from "react-icons/fa";
import { MdCallEnd, MdMailOutline } from "react-icons/md";
import CForm  from './form'                                                                                  
const Contact = (props) => {

let cdata= [{

    icon:<FaHome/>,
    content:`Office: 222 William Street, California, FL, USA, 01234`
},
{

    icon:<MdCallEnd/>,
    content:`Phone: +0 1234 56789 / +0 9876 543210`
},
{

    icon:<MdMailOutline/>,
    content:`Email: order @ex-watch.com `
}]

let socialdata = [<FaFacebookF/>,<FaInstagram/>,<FaTwitter/>,<FaGooglePlusG/>]

    return (
        
        <ContactWrap className="container-fluid py-5" style={{backgroundImage:`url('${Cbg}')`}}>

<div className="container">
    <div className="row">
<div className="col-sm-6 py-5">
<Heading bgcolor="bg-light" color="text-white" scolor="text-dark" bordercolor="border-light"/>

</div>
<div className="col-sm-6"></div>



        <div className="col-sm-6">


        <h3>
        HAVE A QUESTION? GIVE US A CALL OR FILL OUT THE CONTACT FORM – WE'D LOVE TO HEAR FROM YOU 
        </h3>

        <ul className="p-0">

    {

        cdata.map((item, index)=>{

        return <li key={index}><span>{item.icon}</span>{item.content}</li>
        })
    


    }
</ul>

<div className="socialContainer mt-5">
{


socialdata.map((sicon, index)=>{


return <div key={index} className="social ">{sicon}</div>

})
    
}
</div>
        </div>
        <div className="col-sm-6">

<CForm/>

        </div>

    </div>
</div>


        </ContactWrap>
    );
};

const ContactWrap = styled.div`

background-size:cover;
position: relative;
background-position:center center;
 &::before{
position:absolute;
content:"";
top:0;
left:0;
    width:100%;
    height:100%;
    z-index:0;
    background: linear-gradient(14deg, rgba(0,0,0,0.9332107843137255) 0%, rgba(0,0,0,0.8575805322128851) 100%);
 }

 h3{

    margin:2rem 0;
    color:white;
    font-family:var(--HeadingFont);
    line-height:1.5;
    font-weight:700;
    font-size:22px;
    letter-spacing:0.8px;

 }

 .social{

    display:inline;
border:1px solid white;
border-radius:50%;
padding:6px 8px;
margin:10px;
opacity:0.4;
cursor: pointer;
transition:0.5s ease-in-out;
&:hover{

    opacity:1;

}
svg{

    color:white;
    font-size:16px;
}
 }

 ul{

    li{

        list-style:none;
        color:white;
        font-size:16px;
        margin:8px 0px;
        span{
        font-size:18px;

            padding:0 10px;
        }
    }
 }

`
export default Contact;