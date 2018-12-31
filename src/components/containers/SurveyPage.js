import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Question from '../Question';
import Progress from '../common/Progress/Progress';
import PropTypes from 'prop-types';

const Container = styled.div`
 min-height: 30em;
 margin: 0 auto;
 width: 80%;
 padding: 20px;

 &> div {
  text-align: center;
 }`

const ButtonWrapper = styled.div`
   margin: 20px 0;
   
   &> a:first-child {
    float: left;
   }
   &> a:last-child {
    float: right;
   }
 }
`
class SurveyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	currentPage: this.props.match.params.id || 1,
    	questions: this.props.location.state && this.props.location.state.questions || [],
    	currentQuestion: {},
    	prevPage: parseInt(this.props.match.params.id || 1) -1,
    	nextPage: parseInt(this.props.match.params.id || 1) +1,
      answered: false,
      answers: []
    }
    this.displayQuestion = this.displayQuestion.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount() {
  	const pageNo = this.state.currentPage;
  	this.displayQuestion(pageNo);
  }

  displayQuestion(id) {
  	const currentQuestion = this.state.questions[parseInt(id)-1];
  	this.setState({currentQuestion : currentQuestion})
  }

  componentWillReceiveProps(newProps) {
  	const pageId= newProps.match.params.id;
  	let pageQuestion;
  	if (Array.isArray(this.state.questions)) {
  	  pageQuestion = this.state.questions[parseInt(pageId)-1];
  	}
    else {
    	pageQuestion = newProps.survey.questions[parseInt(pageId)-1];
    }
    this.setState({
      currentPage: pageId,
      currentQuestion : pageQuestion, 
      prevPage: parseInt(pageId) -1, 
      nextPage: parseInt(pageId) +1,
      answered: false
    })
  }

  handleAnswer(e) {
    if(e.target.value != '') {
      this.setState({
      answered: true
      })
    }
    else {
      this.setState({
      answered: false
      })
    }
    const getAnswers = this.state.answers;
    getAnswers.push(e.target.value);
    this.setState({answers: getAnswers});
  }

  render() {
  	const { nextPage, prevPage, currentPage, answers } = this.state;
    const questions = this.state.questions;
    const count = questions.length;

    return (
      <Container>
        <Progress current={currentPage} total={count} />

        <Question data={this.state.currentQuestion} onChange={this.handleAnswer} />
        
        <ButtonWrapper>  
         <Link to={{pathname:currentPage == 1 ? "/" : "/survey/" + prevPage}} className="btn">Previous</Link>
        
         {currentPage != count &&
          <Link to={{pathname: "/survey/" + nextPage, state: {questions}}} 
          className={!this.state.answered ? 'btn disable': 'btn'} >Next</Link>
         }
         {currentPage == count && 
          <Link to={{pathname: "/summary",state: {questions, answers: answers}}} 
          className={!this.state.answered ? 'btn disable': 'btn'} >Submit</Link>
         }
        </ButtonWrapper>

      </Container>
    );
  }
};

const { array, object, string } = PropTypes;

SurveyPage.propTypes = {
  match: object,
  params: object,
  id: string,
  location: object,
  state: object,
  questions: array
}

export default SurveyPage;