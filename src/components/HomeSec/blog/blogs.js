import React from 'react';
import styled from 'styled-components'
const Blogs = (props) => {

let blogdata = [{
    title:"REAL SMART FITNESS WATCH TO GET EXCITED ABOUT",
    text:"POSTED BY: ADMIN ADMIN, WED, JUN 01, 16",
    bg:"https://wornandwound.com/library/uploads/2013/08/STOCK_S001K_WRIST12.jpg"
},
{
    title:"REAL SMART FITNESS WATCH TO GET EXCITED ABOUT",
    text:"POSTED BY: ADMIN ADMIN, WED, JUN 01, 16",
    bg:"https://wornandwound.com/library/uploads/2013/08/STOCK_S001W_DIAL22.jpg"
},
{
    title:"REAL SMART FITNESS WATCH TO GET EXCITED ABOUT",
    text:"POSTED BY: ADMIN ADMIN, WED, JUN 01, 16",
    bg:"https://wornandwound.com/library/uploads/2013/08/STOCK_S001B_DIAL12.jpg"
},
{
    title:"REAL SMART FITNESS WATCH TO GET EXCITED ABOUT",
    text:"POSTED BY: ADMIN ADMIN, WED, JUN 01, 16",
    bg:"https://i.pinimg.com/originals/74/e0/6b/74e06b18a011281187a8525415ecb335.jpg"
}]


    return (
        
        <BlogWrap className="container-fluid">


    <div className="row">


        {

            blogdata.map((item, index)=>{

return <>


<div className="col-sm-6 bgc" style={{backgroundImage:`url(${item.bg})`}} key={index}>

    <div className="contentblog ">
        
         <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>   

           


</div>


</>

            })
        }
     
    </div>


        </BlogWrap>
    );
};

const BlogWrap = styled.div`

.bgc{
background-size:cover;
background-position:center;
position: relative;
cursor: pointer;
&::after{

background-color:rgba(0,0,0,0.6);
content:"";
position:absolute;
width:100%;
height:100%;
z-index:1;
top:0;
left:0;


}

&:hover{
    transition:0.2s ease-in-out;

    p{

        color:white;
    }
}
&:hover::after{


    background: linear-gradient(239deg, rgba(60,191,236,0.87718837535014) 0%, rgba(38,139,199,0.8575805322128851) 100%);


}


}

.contentblog{
    box-sizing:border-box;

    padding:5rem 7rem;
    z-index:2 !important;
    position: inherit;
    h3{

        font-size:20px;
        color:white;
        font-family:var(--HeadingFont);
    }

    p{

        font-size:11px;
        color:skyblue;
        line-height:2;
        font-weight:bold;
        letter-spacing:0.5px;

    }
}


`
export default Blogs;