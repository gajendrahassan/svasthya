import React from 'react';
import styled from 'styled-components'
const Form = (props) => {
    return (
        
        <FormWrap className="mb-5">

<form>

<div class="form-group">
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
  </div>
  <div class="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" email"/>
  </div>
 

  <div class="form-group">
    <input type="txet" className="form-control" id="exampleInputPassword1" placeholder="phone Number"/>
  </div>
  <div class="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="text"></textarea>
  </div>
  <button type="submit"  className="cfb">SEND</button>
</form>

        </FormWrap>

    );
};



const FormWrap = styled.div`

input{

    border-radius:25px;
    height:45px;
}

.cfb{

    display:block;
    border:2px solid orange;
    border-radius:25px;
    background-color:transparent;
    padding:8px 30px;
    width:100%;
    color:white;
    font-size:16px;
    font-weight:bold;
    font-family:var(--TextFont)
}

`
export default Form;