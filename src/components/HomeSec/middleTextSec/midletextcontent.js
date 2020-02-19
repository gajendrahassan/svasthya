import React from 'react';
import styled from 'styled-components'
const MidleContent = (props) => {
    return (
        
       <MidleWrap className={`${props.align}`}>

    <h1 className="text-dark">{props.title}</h1>
    <p className="text-secondary">{props.text}</p>

       </MidleWrap>
    );
};

const MidleWrap = styled.div`

h1{

    font-family:var(--TextFont);
    font-weight:100;
    letter-spacing:0.5px;
    line-height:1.3;
    font-size:3rem;
   
}
p{

    margin-top:3rem;
       font-family:var(--TextFont);
       font-size:14px;
   line-height:2;
}
`

export default MidleContent;