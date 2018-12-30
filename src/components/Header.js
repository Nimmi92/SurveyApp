import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../device/device';


const StyledHeader = styled.header`
  background: #000;
  color: #fff;
  font-size: 1em;
  text-align: center;
  padding: 20px 0;
`
const Head1 = styled.h1`
  font-size: 1em;
`
const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
  }
`
const activeStyle = { color: 'tomato' };

const Header = () => {
  return (
    <StyledHeader>
       <Container>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <Head1>React, Redux app</Head1>
        </Container>
    </StyledHeader>
  );
};

export default Header;
