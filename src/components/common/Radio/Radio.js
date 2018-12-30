import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../../device/device';


const Radio = (props) => {
 const {data} = props;
  return (
    <div>
     { data.options && data.options.map((o,i) => {
      return <div><input type="radio" name={data.name} value={o} /><label>{o}</label></div>
    })
   }
     
    </div>
  );
};


const { string, array } = PropTypes;

Radio.propTypes = {
	options: array.isRequired,
	name: string.isRequired
}

export default Radio;
