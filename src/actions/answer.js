import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const UPDATE_CORRECT_ANSWER = 'UPDATE_CORRECT_ANSWER';
export const updateCorrectAnswer = data => ({
  type: UPDATE_CORRECT_ANSWER,
  data
});