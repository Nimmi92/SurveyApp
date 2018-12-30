import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../../device/device';

const StyledRadio = styled.div`
 margin-bottom: 5px;
 display: inline-block;

 input[type="radio"] {

 }
`

const Radio = (props) => {
 const {data} = props;
  return (
    <StyledRadio>
     { data.options && data.options.map((o,i) => {
      return <div key={i}><input type="radio" name={data.name} value={o} onChange={props.onAnswering} /><label>{o}</label></div>
    })
   }

    </StyledRadio>
  );
};


const { string, array } = PropTypes;

Radio.propTypes = {
	options: array,
	name: string
}

export default Radio;
