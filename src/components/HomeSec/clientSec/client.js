import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {


state = {

    clientdata:[{
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/2-1.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    },
    {
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/1-1.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    },
    {
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/4.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    },
    {
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/4.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    },
    {
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/4.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    },{
        photo:"http://exwatch.templines.org/wp-content/uploads/2017/02/4.jpg",
        name:"Sam Anderson",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis totam facilis quidem assumenda! Necessitatibus dolor corrupti cum ab sequi quia, illo deleniti, recusandae iste pariatur, ipsum saepe architecto doloremque.", 
        date:"tuesday 1 december 2020"
    }]
}


  render() {



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <ClientWrap className="container py-5">
        

        <Slider {...settings}>
    
    {
        this.state.clientdata.map((client, item)=>{

return <div className="" >

<div className="contentDiv p-4" style={{borderRight:"1px dotted grey"}}>


 <img src={client.photo} alt="slick" className="d-block m-auto" />
        <p className="text-secondary text-center py-4" style={{fontSize:"14px"}}>{client.content}</p>
        <h5 className="text-dark text-center">{client.name}</h5>
    <h6 className="text-dark text-center">{client.date} </h6>

</div>
   
</div>


        })
    }
        </Slider>
      </ClientWrap>
    );
  }
}

const ClientWrap =styled.div`





`