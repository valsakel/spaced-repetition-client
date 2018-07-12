import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const UPDATE_CORRECT_ANSWER = 'UPDATE_CORRECT_ANSWER';
export const updateCorrectAnswer = data => ({
  type: UPDATE_CORRECT_ANSWER,
  data
});

export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const fetchAnswerSuccess = data => ({
  type: FETCH_ANSWER_SUCCESS,
  data
});

export const fetchAnswers = data => (dispatch, getState) => {

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/answers`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      console.log('FETCH ANSWER', res);
    })
}