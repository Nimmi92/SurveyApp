import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const StyledLoader = styled.div`
  border: 5px solid #f3f3f3; 
  border-top: 5px solid #3498db; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  top: 50%;
  left: 50%;
  margin: -25px;
  position: absolute;
`

const Loader = () => {

  return (
    <div>
     <StyledLoader />
    </div>
  );
};

export default Loader;
