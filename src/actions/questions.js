import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_NEXT_QUESTION_REQUEST = 'FETCH_NEXT_QUESTION_REQUEST';
export const fetchNextQuestionRequest = () => ({
  type: FETCH_NEXT_QUESTION_REQUEST
});

export const FETCH_NEXT_QUESTION_SUCCESS = 'FETCH_NEXT_QUESTION_SUCCESS';
export const fetchNextQuestionSuccess = data => ({
  type: FETCH_NEXT_QUESTION_SUCCESS,
  data
});

export const FETCH_NEXT_QUESTION_ERROR = 'FETCH_NEXT_QUESTION_ERROR';
export const fetchNextQuestionError = error => ({
  type: FETCH_NEXT_QUESTION_ERROR,
  error
});

export const fetchNextQuestion = () => (dispatch, getState) => {
  dispatch(fetchNextQuestionRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/questions/next`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchNextQuestionSuccess(data));
    })
    .catch(err => {
      dispatch(fetchNextQuestionError(err));
    });
};
