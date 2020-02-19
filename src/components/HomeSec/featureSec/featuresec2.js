import React from 'react';
import {FaNotesMedical, FaDatabase, FaFileMedicalAlt  } from "react-icons/fa";
import {GoGraph  } from "react-icons/go";

import { GiHealthCapsule, GiHealthDecrease, GiHeartBeats, GiTestTubes } from 'react-icons/gi';
import { FiShare2,   FiSunrise } from 'react-icons/fi';
 import { AiOutlineMessage } from 'react-icons/ai';
import styled from 'styled-components'
const FeatureCont2 = (props) => {


    let FeatureData = [
        {
    
            title:"Connected health platform ",
            icon:<GiHealthDecrease/>,
    
        },
        {
    
            title:"Non-invasive blood glucose ",
            icon:<GiTestTubes/>,
    
        },
        {
    
            title:"Cufless BP ",
            icon:<FaNotesMedical/>,
    
        },
        {
    
            title:"HRV ",
            icon:<GiHeartBeats/>,
    
        },
        {
    
            title:"Time correlated data ",
            icon:<GoGraph/>,
    
        },
        {
    
            title:"Autonamic imbalance ",
            icon:<GiHealthCapsule/>,
    
        },
        ,
        {
    
            title:"Glysamicvaribility  ",
            icon:<FaDatabase/>,
    
        },
        {
    
            title:"CVD",
            icon:<FaFileMedicalAlt/>,
    
        }
    ]



     

    return (
        
        <FeaturSec2Wrap>

            <div className="row">


 {
       FeatureData.map((item, index)=>{
return(<>


  <div className="col-sm-3 my-4 iconSec" key={index}>


    <div className=" iconsvgcnt">{item.icon}</div>
  <p id="pco">{item.title}</p>


   
  </div>


</>)



       }) 

     

       
    }

</div>

        </FeaturSec2Wrap>
    );
};

const FeaturSec2Wrap = styled.div`

.iconSec{

    border-right:0.5px dotted grey;
}
.iconsvgcnt{

    font-size:32px;
    padding:15px;
    border-radius:50%;
    border:6px solid #f5f5f5;

    width:70px;
    height:70px;
    margin:auto;
    position:relative;

    svg{

        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        color:grey;
        font-weight:200;
    }
}

#pco{
    font-size:12px;
    text-align:center;
    color:#111111;
    font-weight:bold;
    padding:10px;
}

`
export default FeatureCont2;