import {
  CLEAR_ANSWER,
  FETCH_ANSWER_SUCCESS
} from '../actions/answers';

const initialState = {
  answer: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_ANSWER_SUCCESS) {
    console.log('FETCH_ANSWER_SUCCESS ran', action.data);
    return Object.assign({}, state, {
      answer: action.data.answer
    });
  } else if (action.type === CLEAR_ANSWER) {
    console.log('CLEAR_ANSWER ran', action.data);
    return {
      answer: null
    };
  }

  return state;
}