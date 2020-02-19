import React, { Component } from 'react';
import Heading from '../../../global/heading';
import styled from 'styled-components';
import img1 from '../../../images/ime-render.png';

import Fade from 'react-reveal/Fade';
class helpmain extends Component {

    constructor(props) {
        super(props);


        
this.state={

    helpdata:[
        {
            id:1,
            title:'TRACK EVERY ACTIVITY',
            content:"Ex-Watch gives you an easy-to-read dashboard of tracking your activities. The Health app puts your data in one place, accessible with a tap, giving you a clear and current overview of your health & activities. It just might be the beginning of a health revolution.",
            imge:"https://cdn.shopify.com/s/files/1/1315/0213/t/4/assets/homepage_feature2_1.jpg?v=15217841245925245431"
        },
        {
            id:2,
            title:'LIVE IN STYLE - YOUR WAY',
            content:"Ex-Watch gives you an easy-to-read dashboard of tracking your activities. The Health app puts your data in one place, accessible with a tap, giving you a clear and current overview of your health & activities. It just might be the beginning of a health revolution.",
            imge:"https://cdn.shopify.com/s/files/1/1315/0213/t/4/assets/homepage_feature2_2.jpg?v=11741403234538269808"

        },
        {
            id:3,
            title:'YOUR TRUE COMPANION ',
            content:"Ex-Watch gives you an easy-to-read dashboard of tracking your activities. The Health app puts your data in one place, accessible with a tap, giving you a clear and current overview of your health & activities. It just might be the beginning of a health revolution.",
            imge:"https://cdn.shopify.com/s/files/1/1315/0213/t/4/assets/homepage_feature2_3.jpg?v=615776202323157683"

        },]
};
    }




    componentDidMount() {


      }


    render() {
        return (
            <HelpMainWrap className="container">
  


                <div className="row">
                    <div className="col-sm-4">

                <Heading/>

                <div className="container">
                    <img id="hslide" width="100%" src={img1} alt="images"/>
                </div>

                    </div>
                    <div className="col-sm-8">

<ul id="scrollanim">
<Fade duration={1000}  bottom>

{

    this.state.helpdata.map((item, index)=>{

   return  <li className="container-fluid " id="lianim" >
        <div className="row">

    <div className="col-sm-9">
        
        <div className="hcontent">

        <h5 className="text-dark my-4">{item.title}</h5>
        <p className="text-secondary">{item.content}</p>
        </div>
        
      </div>
    <div className="col-sm-3">

        <img src={item.imge} width="100%" alt="svasthya"/>
    </div>
        </div>
    </li>
    
    })
}

 </Fade>  
</ul>



                    </div>
                </div>
           
            </HelpMainWrap>
        );
    }
}


const HelpMainWrap = styled.div`

border-right:2px dotted grey;
padding:7% 0;




ul{

    margin-left:12%;
    width:100%;

    li{

        list-style:none;

    }
    
    img{

width:150px;
height:150px;
border-radius:50%;
border:15px solid #f5f5f5;
display:block;
margin:auto;
}
}


    h5{

        text-transform:uppercase;
        text-align:right;
        color:grey;
        font-size:20px;
    }

#hslide{

height:100%;
margin-top:15%;
transition:0.5s ease-in-out;

&:hover{

    transform:scale(1.2);
}

}

`

export default helpmain;