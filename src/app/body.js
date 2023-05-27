import React from 'react'
import styled from 'styled-components'
import RandomNumberGenerator from './scriptdigit'
import Timer from './scripttimer'
import Authenticator from './script'
function body() {
  return (
    <Container>
    <div class="authenticator-item">
        <div class="number"><RandomNumberGenerator/></div>
        <div class="gmail-text">gmail@gmail.com</div>
        <div class="timer"><Timer/></div>
      </div>
    <div class="authenticator-item">
        <div class="number"><RandomNumberGenerator/></div>
       <div class="gmail-text">gmail@gmail.com</div>
       <div class="timer"><Timer/></div>
    </div>
  <button id="addButton" onclick="Authenticator()">+</button>
  </Container>
  
  )
}

export default body

const Container = styled.div`
opacity:60%;
margin-top:30px;
font-size:23px;
margin-left:200px;
margin-right:200px;
height:80vh;
width:60vw;
background-color:lightgray;
border-radius:10px;
justify-content:space-between;
text-align:right;
`