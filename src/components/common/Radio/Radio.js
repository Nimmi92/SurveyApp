import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadio = styled.div`
 margin-bottom: 5px;
 display: inline-block;

 input[type="radio"] {

 }
`

const Radio = (props) => {

  return (
    <StyledRadio>
     { props.options && props.options.map((o,i) => {
      return <div key={i}><input type="radio" name={props.name} value={o} onChange={props.onChange} /><label>{o}</label></div>
    })
   }

    </StyledRadio>
  );
};


const { string, array, func } = PropTypes;

Radio.propTypes = {
	options: array,
	name: string,
  onChange: func
}

export default Radio;
