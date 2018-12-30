import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled.div`

 label {
 	margin: 0 5px 0 0;
 }

 select {
  height: 30px;
  padding: 5px 10px;
  background: #e8e8e8;
  border-radius: 3px;
  border: 1px solid #ccc;
 }

`
const Select = (props) => {
 const {data} = props;
  return (
   <StyledSelect>
  	 {data.label && <label>{data.label}</label>}
      <select onChange={data.onChange}>
      {data.options.map((o,i) => {
    	return <option value={o} key={i}>{o}</option>
      })}
     </select>
   </StyledSelect>
  );
};


const { string, func, array } = PropTypes;

Select.propTypes = {
	options: array.isRequired,
	onChange: func,
	label: string,
}

export default Select;