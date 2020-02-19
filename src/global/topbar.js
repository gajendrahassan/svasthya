import React from 'react';
import styled from 'styled-components'
import './navbar.css'

const Topbar = (props) => {
    return (
        
      <TopBarWrap>
   <div className="container navs " >

<div className="row">
    <div className="col-sm-2 t">  <li >call us +9732xxxxx</li></div>
    <div className="col-sm-2 t">  <li>xyz@gmail.com</li></div>
    <div className="col-sm-4 t"></div>
    <div className="col-sm-2 t"><li >Creat Account</li></div>
    <div className="col-sm-2 t"><li >Sign in</li></div>
</div>


   </div>
      </TopBarWrap>
    );
};


const TopBarWrap = styled.div`
z-index:22 !important;
li{

color:white;
background-color:transparent;
list-style:none;
text-align:center;
padding:15px 3px;


}

.t{

  z-index:22;
}

background-color:#0058dc;
@media(max-width:960px){


 display:none !important;



 
}

`
export default Topbar;