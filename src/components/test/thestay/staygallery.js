import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

const StayGallery = (props) => {
    return (
        
        <>
 <StyleRoot>
<Coverflow width="960" height="500"
    displayQuantityOfSide={1}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={1}
    infiniteScroll={true}
    media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
  >
    <div
    
      role="menuitem"
      tabIndex="0"
    >
      <img
        src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg'
        alt='title or description'
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
    <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://www.freedigitalphotos.net/images/img/homepage/394230.jpg' alt='Album three' data-action="https://doce.cc/"/>
      
  </Coverflow>
</StyleRoot>
        </>
    );
};

export default StayGallery;