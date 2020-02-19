import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Fade from 'react-reveal/Fade';
import SliderUndSec from './slideundSec'
class slidecontent extends Component {


    constructor(props) {
        super(props);
        this.state = {

            slidedata:[
                
                {
                    id:"one",
        img:"https://www.bell.ca/Styles/wireless/Applewatch4/40mm-AluminumSilver-SportBand-White_lrg1.png",
        title:"Remote Health Discovery"
        },
               
        {   id:"two",
            img:"https://i.ya-webdesign.com/images/apple-watch-png-6.png",
            title:"Care Coordination"
            },
            {   id:"three",
            img:"https://i.ya-webdesign.com/images/apple-watch-png-6.png",
            title:"Touching 100M people by 2030"
            }
        ],
        
        cslide:0
        }
        this.img = React.createRef();

       
    }




handleClickright = () => {


    this.img.current.classList.remove('animated', 'flipInX')

    this.setState({cslide:this.state.cslide + 1});

    this.img.current.classList.add('animated', 'bounceInBottom')

  if(this.state.cslide === this.state.slidedata.length-1){
 

        this.img.current.classList.remove('animated', 'bounceInUp')

    this.setState({cslide:0});
this.img.current.classList.add('animated', 'flipInX')


}


    
}


handleClickleft = () => {
   

    this.img.current.classList.remove('animated', 'flipInY')

    this.setState({cslide:this.state.cslide - 1});
    this.img.current.classList.add('animated', 'bounceInLeft')


    if(this.state.cslide === 0){
        this.img.current.classList.remove('animated', 'bounceInRight')

    this.setState({cslide:this.state.slidedata.length - 1});
    this.img.current.classList.add('animated', 'flipInY')

        
    }
    

    }


    render() {

        const {cslide } = this.state;
        return (
            <SlideContent className="container-fluid " id="section1">

               <div className="row  w-100">
               <div className="col-sm-2 d-flex align-items-center justify-content-center">

                   <span >
                   <IoIosArrowDropleftCircle  onClick={this.handleClickleft.bind(this)}/>
                   </span>

                   </div>
                   <div className="col-sm-3">
                  
         <img ref={this.img} className="d-block mx-auto"   src={this.state.slidedata[cslide].img} alt="fgfg" id="slideimg" />
         
                   </div>
                   <div className="col-sm-5">

              <h1 className="text-white btext ">{this.state.slidedata[cslide].title}</h1>


                   </div>
           <div className="col-sm-2 d-flex align-items-center justify-content-center">


                   <span >
                  <IoIosArrowDroprightCircle  onClick={this.handleClickright.bind(this)}/>
                   </span>


</div>
               </div>

             <SliderUndSec/>

            </SlideContent>
        );
    }
}








const SlideContent = styled.div`
display:flex;
width:100%;
height:100%;
align-items:center;
justify-content:center;

background-color:rgba(21, 100, 208, 0.9);
position: relative;

.btext{


    font-size:4rem;
    font-family:var(--HeadingFont);
    font-weight:bold;
    margin-top:100px !important;
}
&:hover{
transition:1s ease-in-out;
   span svg{

            visibility: visible;

   } 
}
span {

    svg{

        color:white;
        font-size:40px;
        font-weight:bold;
        display: block;
        margin:auto;
        opacity:0.6;
        transition:0.2s ease-in-out;
        visibility: hidden;
        cursor:pointer;
    


        &:hover{
        opacity:0.9;
        transform:scale(1.2)

            
        }
    }

}
#slideimg{

    width:100%;
}
@media(max-width:960px){


#slideimg{

    width:65%;

}

.btext{

    font-size:2rem;
    text-align:center;
}

}


`

export default slidecontent;