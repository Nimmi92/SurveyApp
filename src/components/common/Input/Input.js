import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../../device/device';

const StyledLabel = styled.label`
	display: inline-block;
	margin: 0 5px 10px 0;

	@media ${device.mobileL} {
      display: block;
      margin: 0 0 10px 0;
      text-align: left;
  	}
`
const StyledInput = styled.input`
	display: inline-block;
	padding: 2px 5px;
	background: #fff;
	margin: 0 0 10px 0;
	background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  height: 20px;
  box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

	@media ${device.mobileL} {
      display: block;
      width: 95%;
  	}
`
const Input = (props) => {

  return (
    <div>
     { props.label && <StyledLabel htmlFor={props.id}> {props.label} </StyledLabel> }
     <StyledInput type={props.type} placeholder={props.placeholder} id={props.id} size={props.size} onChange={props.onChange}/>
     
    </div>
  );
};


const { string, func } = PropTypes;

Input.propTypes = {
	label: string,
	type: string,
	placeholder: string,
	size: string,
  onChange: func
}

export default Input;
