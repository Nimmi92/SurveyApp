import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledA = styled.a`
 font-size: 0.8em;
 margin-bottom: 10px;
 color: #24292e;
 display: inline-block;

 &:hover {
  color: #0366d6;
 }
`
const Anchor = (props) => {

  return (
    <StyledA href={props.href} onClick={props.onClick}>
    	{props.linkText}
    </StyledA>
  );
};


const { string, func } = PropTypes;

Anchor.propTypes = {
	linkText: string,
	onClick: func,
	href: string,
}

export default Anchor;