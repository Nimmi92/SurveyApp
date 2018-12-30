import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/fetchSurveyActions';
import Question from '../Question';
import Progress from '../common/Progress/Progress';

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
    const currentPageId = this.state.currentPage;
    const answeredQuestions = this.state.answers;
    answeredQuestions[parseInt(currentPageId)-1] = e.target.value;
    this.setState({answers: answeredQuestions})
  }

  render() {
  	const { nextPage, prevPage, currentPage, answers } = this.state;
  	const count = Array.isArray(this.state.questions) ? this.state.questions.length : this.props.survey.questions.length;
    const questions = Array.isArray(this.state.questions) ? this.state.questions : this.props.survey.questions;

    return (
      <Container>
       	<div>
        <Progress current={currentPage} total={count} />
        <Question data={this.state.currentQuestion} onAnswering={this.handleAnswer} />
        <ButtonWrapper>
        <Link to={{pathname:currentPage == 1 ? "/" : "/survey/" + prevPage}} className="btn">Previous</Link>
        <Link to={{
        pathname: currentPage != count ? "/survey/" + nextPage : "/summary",
        state: {questions: questions, answers: answers}
        }} className={!this.state.answered ? 'btn disable': 'btn'}>{currentPage != count ? "Next" : "Submit"}</Link>
        </ButtonWrapper>
        </div>
      </Container>
    );
  }
};

function mapStateToProps(state) {
  return {
    survey: state.survey
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SurveyPage);