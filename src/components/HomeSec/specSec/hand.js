import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import hand from '../../../images/watchbest.png'

const Handanim = (props) => {
    return (
        <HandWrap>
    <div id="trigger1" />
    <Controller>
    <Scene
        triggerElement="#trigger1"
        duration={500}
       
        triggerHook={0.6}
      >


{(progress) => (
          <Tween            
            to={{
              
              y: 60,
              opacity:1
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
<img src={hand} width="220%"  style={{ transform:"translateY(400px)", opacity:"0", transition:"0.1s"}} alt="hand" />
          </Tween>    
        )}
</Scene>
</Controller>
        </HandWrap>
    );
};

const HandWrap = styled.div`



`
export default Handanim;