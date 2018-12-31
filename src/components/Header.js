import React from 'react';
import styled from 'styled-components';
import { device } from '../device/device';


const StyledHeader = styled.header`
  background: #000;
  color: #fff;
  font-size: 1em;
  text-align: center;
  padding: 10px 0;
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
const Header = () => {
  return (
    <StyledHeader>
       <Container>
          <Head1>Survey</Head1>
        </Container>
    </StyledHeader>
  );
};

export default Header;
