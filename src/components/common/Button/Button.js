import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
 border: none;
 margin: 5px 0 5px 0;
 background-color: #28a745;
 background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
 color: #fff;
 border-radius: .25em;
 cursor: pointer;
 display: inline-block;
 font-size: 14px;
 font-weight: 600;
 line-height: 20px;
 padding: 6px 12px;
`
const Button = (props) => {

  return (
     <StyledButton onClick={props.onClick}>{props.name}</StyledButton>
  );
};

const { string, func } = PropTypes;

Button.propTypes = {
 name: string.isRequired,
 onClick: func.isRequired
}

export default Button;
