import React from 'react';
import styled from 'styled-components';
import { device } from '../device/device';

const StyledFooter = styled.footer`
  background: #000;
  color: #fff;
  font-size: 0.8em;
  text-align: center;
  padding: 5px 0;
`
const Footer = () => {
  return (
    <StyledFooter>
      <p>Built with React, Redux, Redux-thunk, Jest, Enzyme</p>
    </StyledFooter>
  );
};

export default Footer;
