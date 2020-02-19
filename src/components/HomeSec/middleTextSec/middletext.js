import React from 'react';
import styled from 'styled-components'
import MainContent from './midletextcontent'
const MainText = (props) => {


let title1= `CONNECT WITH
FRIENDS & FAMILY`

let title2= `ANYWHERE
AND ANYTIME`

let text1 = `Ex-Watch allows you to get connected with your friends and family members where ever you are. It also tells you what's nearby. You'll get notifications in real-time and you don't have to go into the apps.`
let text2 = `Ex-Watch also let you store your favourite contacts for quick access. You can add them easily in watch app and can build groups of friends & family for sending quick messages or make voice calls.`


return (
        
        <MainTextWrap className="container-fluid">

<div className="container">

    <div className="row">

        <div className="col-sm-6">

<MainContent align="text-right" title={title1} text={text1}/>            

        </div>
        <div className="col-sm-6">
<MainContent align="text-left" title={title2} text={text2}/>

        </div>

<div className="col-sm-12 mt-5">

    <button id="custom3">Buy it Now $222</button>
</div>

    </div>
</div>

        </MainTextWrap>
    );
};

const MainTextWrap = styled.div`

padding:4rem 0;
#custom3{

    padding:15px 3.5rem;
    border:0.7rem solid #f5f5f5;
    border-radius:50px;
    background-color:#4494EC;
    color:white;
    display:block;
    margin:auto;
    font-family:var(--HeadingFont);
    font-size:1.5rem;
    font-weight:bold;


}

`
export default MainText;