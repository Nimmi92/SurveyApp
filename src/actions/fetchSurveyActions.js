import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch'

export function requestSurvey() {
  return {
    type: types.REQUEST_SURVEY
  }
}

export function receiveSurvey(json) {
  if(json.message) {
    return {
      type: types.GOT_ERROR,
      error: json.message
    }
  }
  return {
    type: types.RECEIVE_SURVEY,
    questions: json
  }
}

export function handleError(error) {
  return {
    type: types.GOT_ERROR,
    error: error
  }
}

export function fetchSurvey() {
  return dispatch => {
    dispatch(requestSurvey())
    return fetch('../data/survey.json')
      .then(response => response.json())
      .then(json => dispatch(receiveSurvey(json)))
      .catch(error => dispatch(handleError(error)))
  }
}

