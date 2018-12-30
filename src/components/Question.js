import React from 'react';
import styled from 'styled-components';
import Input from './common/Input/Input';
import Select from './common/Select/Select';
import Radio from './common/Radio/Radio';

const StyledQuestion = styled.div`
 min-height: 5em;
 margin: 0 auto 20px;
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
  		{data.type === 'text' && <Input data={data} onAnswering={props.onAnswering} />}
  		{data.type === 'select' && <Select data={data} onAnswering={props.onAnswering} />}
  		{data.type === 'radio' && <Radio data={data} onAnswering={props.onAnswering} />}
  	</StyledQuestion>
  );
};

export default Question;