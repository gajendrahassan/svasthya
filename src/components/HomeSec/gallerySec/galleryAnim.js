import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import vimg from '../../../images/videimage.jpg';
import { FaPlayCircle } from "react-icons/fa";

const Galanim = (props) => {
    return (
        <GalWrap>
    <div id="trigger" />
    <Controller>
    <Scene
        triggerElement="#trigger"
        duration={600}
      
        triggerHook={0.6}
      >


{(progress) => (
          <Tween            
            to={{
           
            
              scale:(1),
              opacity:1
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
 <div className="vimg" >
<img src={vimg} width="100%" height="400px" onClick={()=>props.onclik()} />
<FaPlayCircle onClick={()=>props.onclik()} />

        </div>     
        
             </Tween>    
        )}
</Scene>
</Controller>
        </GalWrap>
    );
};

const GalWrap = styled.div`



`
export default Galanim;