import React from 'react';
import Heading from '../../../global/heading';
import styled from 'styled-components'
import team1 from '../../../images/teamimg/1.jpg'
import team2 from '../../../images/teamimg/2.jpg'
import team3 from '../../../images/teamimg/3.jpg'

const AboutSec = (props) => {
    return (
        
        <AboutWrap className="container my-5" id="section6">

            <div className="row">
                <div className="col-sm-6">
                    <Heading/>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-12 mt-5">
                    <p className="text-secondary">
                    Over the past decade, there has been a consistent increase in disease burden (Disability Adjusted Life Years) even though communicable diseases are under check; increasingly more from non-communicable (NCDs / life style) diseases that has brought down the quality of life, life expectancy and increased burden of health costs.
The existing healthcare systems are not able to scale up to counter the increasing disease burden. A ubiquitous healthcare platform is needed that can detect and deliver primary healthcare at a large scale by augmenting the existing healthcare infrastructure such that the existing health infrastructure can be used in an optimal way to address the real necessities.
Svasthya provides clinical bio-markers (HRV, HbA1c, BP, GSR) and alerts to doctors based on glycemic control variations with patient context assessment for remote health discovery and care coordination. 
The user needs to buy a “Svasthya” subscription which consists of a cloud platform and a wearable device. Secure access through a mobile application and web login provides stakeholders access to reports and configuration. The healthcare providers configure the device remotely based on doctor’s recommendations and uniqueness of the patient for monitor and emergency response. “Svasthya” as a platform ecosystem collaborates among the important health stakeholders of an individual comprising of the user/patient, family member(s), doctor and healthcare provider; ensuring seamless communication and coordination for health preservation and emergency response.
Patient data is available on the history database of the platform for review and analytics. The cloud infrastructure works on the patient data to provide actionable inferences to the health practitioners
The subscription is sold through recommendations from health professionals and at a “Svasthya” outlet.
 </p>
                </div>
              
                <div className="col-sm-12">

                    <div className="row">
                        <div className="col-sm-4">
                            <img src={team1} alt="watch"/>
                           
                            </div>
                        <div className="col-sm-4">
                            <img src={team2} alt="watch" />
                            
                            </div>
                        <div className="col-sm-4">
                            <img src={team3} alt="watch"/>
                            
                            </div>
                    </div>
                </div>
            </div>


        </AboutWrap>
    );
};

const AboutWrap = styled.div`

p{
    font-family:var(--HeadingFont);
    line-height:2;
    font-size:15px;
}
h5{

     font-family:var(--HeadingFont);
    line-height:1.7;
}

img{

    width:40%;
    height:140px;
    display:block;
    margin:3rem auto;
    border-radius:50%;
    border:0.4rem solid #f5f5f5;
    box-shadow: 0px 12px 15px 1px #dadada;
}


`
export default AboutSec;