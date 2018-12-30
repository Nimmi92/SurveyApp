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
  const {data} = props;
  return (
    <div>
     { data.label && <StyledLabel htmlFor={data.id}> {data.label} </StyledLabel> }
     <StyledInput type={data.type} placeholder={data.placeholder} id={data.id} size={data.size} />
     
    </div>
  );
};


const { string } = PropTypes;

Input.propTypes = {
	label: string,
	id: string,
	type: string.isRequired,
	placeholder: string,
	size: string
}

export default Input;
