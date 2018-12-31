import React from 'react';
import styled, { keyframes } from 'styled-components';

const TotalProgress = styled.div`
 width: 80%;
 border: 1px solid #000;
 height: 20px;
 text-align: left;
 margin: 0 auto;
 text-align: left !important;

 p {
  text-align: center;
  margin: 0 0 10px 0;
 }
`
const CurrentProgress = styled.div`
 width: ${props => (props.current/props.total)*100}%;
 background: #ccc;
 display: inline-block;
 height: inherit;
 text-align: left;
`
const Progress = (props) => {

  return (
    <TotalProgress>
     <CurrentProgress current={props.current} total={props.total} />
     <p>{`${props.current}/${props.total}`}</p>
    </TotalProgress>
  );
};

export default Progress;
