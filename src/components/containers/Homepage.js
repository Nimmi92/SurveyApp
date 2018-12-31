import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as actions from '../../actions/fetchSurveyActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

const Container = styled.div`
 min-height: 30em;
 margin: 0 auto;
 width: 80%;
 padding: 20px;

 & > div {
  text-align: center;
 }
`

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	this.props.actions.fetchSurvey();
  }

  render() {
  	const { questions } = this.props.survey

  	return (
    <Container>
     <div>
     <h2>Welcome to SurveyApp</h2>
     <h3>Please take a survey</h3>
     <Link to={{pathname:"/survey/1", state:{questions}}} >Start</Link>
     </div>
    </Container>
  	);
  }

}

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

const { func, array, object } = PropTypes;

HomePage.propTypes = {
  actions: object,
  fetchSurvey: func,
  survey: object,
  questions: array
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);