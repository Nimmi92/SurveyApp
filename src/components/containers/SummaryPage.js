import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
 min-height: 30em;
 margin: 0 auto;
 width: 80%;
 padding: 20px;
 text-align: center;
`
const StyledQuestion = styled.div`
 margin-bottom: 10px;
 border-bottom: 2px solid #f8f8f8;

 p:first-child {
 	font-weight: bold;
 }
 p:last-child {
 	font-size: 0.8em;
 }
`

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	questions: this.props.location.state ? this.props.location.state.questions : [],
    	answers: this.props.location.state ? this.props.location.state.answers : [],
    }

  }

  componentDidMount() {
  }

  render() {
  	const { questions, answers } = this.state
  	
  	return (
    <Container>
     <div>
      <p>Thanks for taking the survery.</p>
      <Link to="/" className="btn">Back to Home</Link>
     </div>

     {questions.length > 0 && questions.map((q,i) => {
     	return <StyledQuestion>
     			<p>{i+1}.{q.question}</p>
     			<p>{answers[i]}</p>
     		   </StyledQuestion>
        })
 	 }

     {questions.length == 0 && <Link to="/survey/1" className="btn">Start</Link>}

    </Container>
    );
  }

};


export default SummaryPage;