import React, { Component } from 'react';
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax';
import FeatureContent from './featureSecCont'
class WatchSlideSec extends Component {


    state = {

 watchdata: [
     
    {

        active:true,
        src:"https://cdn.shopify.com/s/files/1/1315/0213/products/3.png?v=1465067430"
    },
     
    {

        active:true,
        src:"https://cdn.shopify.com/s/files/1/1315/0213/products/1.png?v=1465067425"
    },
    ,
     
    {

        active:true,
        src:"https://cdn.shopify.com/s/files/1/1315/0213/products/2.png?v=1465067428"
    }
    
],

current:"https://cdn.shopify.com/s/files/1/1315/0213/products/3.png?v=1465067430"
    }


handleClick = (e) => {
    e.preventDefault();

 let src = e.target.getAttribute('data-imge');


this.setState({current:src})
    
    
}




    render() {
       
       const {current} = this.state;
    return (
       

        <WatchSlideWrap className="container-fluid py-5 my-5 " style={{overflow:"hidden"}}>

<div className="row">

    <div className="col-sm-2"></div>
    <div className="col-sm-5">

<FeatureContent/>


    </div>

     

    <div className="col-sm-4"  >

    <Parallax className="custom-class" x={[15, -15]} tagOuter="figure">

<img src={current} className="watchimg d-block m-auto" width="80%" alt="gg" srcset=""/>
</Parallax>


    <ul>
      <li tabIndex="1" onClick={(e)=>this.handleClick(e)} data-imge="https://cdn.shopify.com/s/files/1/1315/0213/products/3.png?v=1465067430" style={{backgroundColor:"#FF51BE"}}></li>
      <li tabIndex="2" onClick={(e)=>this.handleClick(e)} data-imge="https://cdn.shopify.com/s/files/1/1315/0213/products/1.png?v=1465067425" style={{backgroundColor:"#C9E300"}}></li>
      <li tabIndex="3" onClick={(e)=>this.handleClick(e)} data-imge="https://cdn.shopify.com/s/files/1/1315/0213/products/2.png?v=1465067428" style={{backgroundColor:"#29D3F2"}}></li>
  </ul>
    </div>
    <div className="col-sm-1"></div>


</div>
  

  
        </WatchSlideWrap>
        
      );
    }
}


const WatchSlideWrap = styled.div`
ul{

    display:flex;

    li {

    width:35px;
    height:35px;
    border-radius:50%;
    margin:20px 15px;
    list-style:none;
    cursor: pointer;
    transition:0.2s;
    &:hover{

        transform:scale(1.2);
    }

    &:focus{

        transform:scale(1.2);
     box-shadow:0px 2px 5px 1px  grey;
        outline:none;

    }
    

} 
}

#pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }


`
export default WatchSlideSec;