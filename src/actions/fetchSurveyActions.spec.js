import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './fetchSurveyActions';

describe('Actions', () => {

  const appState = {
      questions: [],
      isFetching: false,
      error: '',
      answers: []
    }


  const appStateWithError = {
    questions: [],
      isFetching: false,
      error: 'Not found',
      answers: []
  }

  it('should create an action to request issues when passing a repo', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.REQUEST_SURVEY
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.fetchSurvey())).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchSurvey()(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to receive issues when successfully fetches issues', () => {
    const actual = ActionCreators.receiveSurvey(appState.questions);
    const expected = {
      type: ActionTypes.RECEIVE_SURVEY,
      questions: appState.questions
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action to got error when it is failed to fetch issues', () => {
    const actual = ActionCreators.handleError(appStateWithError.error);
    const expected = {
      type: ActionTypes.GOT_ERROR,
      error: appStateWithError.error
    };

    expect(actual).toEqual(expected);
  });

});
