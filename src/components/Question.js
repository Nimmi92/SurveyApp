import React from 'react';
import styled from 'styled-components';
import Input from './common/Input/Input';
import Select from './common/Select/Select';
import Radio from './common/Radio/Radio';

const StyledQuestion = styled.div`
 min-height: 5em;
 margin: 30px auto;
 border-bottom: 2px solid #f8f8f8;
 padding: 0 0 20px 0;
 
 h4 {
 	font-size: 1.5em;
 }
`
const Question = (props) => {
	const { data } = props;
  return (
  	<StyledQuestion>
  		<h4>{data.question}</h4>
  		{data.type === 'text' && <Input {...data} onChange={props.onChange} />}
  		{data.type === 'select' && <Select  {...data} onChange={props.onChange} />}
  		{data.type === 'radio' && <Radio  {...data} onChange={props.onChange} />}
  	</StyledQuestion>
  );
};

export default Question;