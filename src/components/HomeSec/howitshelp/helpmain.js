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
            title:'Health Collaboration',
            content:`Collaborative platform bringing patient, healthgiver & family on same platform
            Doctor’s control dashboard,
            Immediate notification to stakeholders on alerts and emergency
            Real-time care coordination,
            Single device based platform with global coverage`,
            imge:"https://cdn.business2community.com/wp-content/uploads/2012/10/collaboration-puzzle-pieces.png"
        },
        {
            id:2,
            title:'Health proliferation',
            content:` Pay per use model enables healthcare providers unlimited expansion
            Reduced capital intensive investments,
            Subscription based healthcare,
            Healthcare to the convenience of the patient anywhere
            `,
            imge:"https://medcitynews.com/uploads/2017/03/GettyImages-647410138.jpg"

        },
        {
            id:3,
            title:`Insurance and Policy making
            Data science based healthcare`,
            content:`
            Data science based health research
            Policy making based on population health statistics
            Patient health data based insurance risk assessment
            Reduction of false insurance claims
            Reduction in cost of health insurance`,
            imge:"https://healthitanalytics.com/images/site/article_headers/_normal/ThinkstockPhotos-538998185.jpg"

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
        font-size:16px;
        line-height:1.8;
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