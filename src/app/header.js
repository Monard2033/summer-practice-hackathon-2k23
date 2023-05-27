import React from 'react'
import styled from 'styled-components'

function header() {
  return (
    <Container>
      <h1>Authenticator</h1>
      </Container>
  )
}

export default header

const Container = styled.div`
height: 10vh;
width: 60vw;
margin-left:200px;
margin-right:200px;
align-content:left; 
opacity: 100%;
background-color: blue;
`