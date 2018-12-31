import { REQUEST_SURVEY, RECEIVE_SURVEY, GOT_ERROR } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function survey(state = initialState.survey, action) {
  let newState;

  switch (action.type) {
    case REQUEST_SURVEY:
      newState = objectAssign({}, state);
      newState.isFetching = true;
      return newState;
    case RECEIVE_SURVEY:
      newState = objectAssign({}, state);
      newState.questions = action.questions;
      newState.isFetching = false;
      return newState;
    case GOT_ERROR:
      newState = objectAssign({}, state);
      newState.questions = {};
      newState.isFetching = false;
      newState.error = action.error
      return newState;
    default:
      return state;
  }
}
