// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import survey from './surveyReducer';

 const rootReducer = combineReducers({
  survey
});

export default rootReducer;
