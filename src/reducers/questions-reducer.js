import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from '../actions/questions';

const initialState = {
  data: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTIONS_SUCCESS) {
    console.log('FETCH_QUESTIONS_SUCCESS ran', action.data);
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_QUESTIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
