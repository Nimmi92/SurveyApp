import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/fetchSurveyActions';

const Container = styled.div`
 min-height: 30em;
 margin: 0 auto;
 width: 80%;
 padding: 20px;
`
class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	questions: this.props.location.state ? this.props.location.state.questions : [],
    	answers: this.props.location.state ? this.props.location.state.answers : []
    }

  }

  componentDidMount() {
  	
  }

  render() {
  	return (
    <Container>
     {this.state.questions.length > 0 && this.state.questions.map((q,i) => {
     	return <div><p>{i+1}.{q.question}</p><p>{this.state.answers[i]}</p></div>
     })}
     {this.state.questions.length == 0 && <Link to="/survey/1" className="btn">Start</Link>
     }
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

export default connect(mapStateToProps,mapDispatchToProps)(SummaryPage);