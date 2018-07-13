import {
  CLEAR_ANSWER,
  FETCH_ANSWER_SUCCESS
} from '../actions/answers';

const initialState = {
  answer: null,
  correct: false,
  score: 0,
  total: 0,
};

export default function answers(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANSWER_SUCCESS:
      return Object.assign({}, state, {
        answer: action.data.answer,
        correct: action.data.correct,
        score: action.data.score,
        total: action.data.total
      });
    case CLEAR_ANSWER:
      return {
        answer: null
      };
    default: return state;
  }

  // if (action.type === FETCH_ANSWER_SUCCESS) {
  //   return Object.assign({}, state, {
  //     correct: action.data.correct,
  //     answer: action.data.answer
  //   });
  // } else if (action.type === CLEAR_ANSWER) {
  //   return {
  //     answer: null
  //   };
  // }

  // return state;
}
