import {
  UPDATE_CORRECT_ANSWER
} from '../actions/answers';

const initialState = {
  correctAnswer: null
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_CORRECT_ANSWER) {
    console.log('UPDATE_CORRECT_ANSWER ran', action.data);
    return Object.assign({}, state, {
      correctAnswer: action.data
    });
  }

  return state;
}