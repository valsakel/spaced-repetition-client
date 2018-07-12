import {
  FETCH_NEXT_QUESTION_REQUEST,
  FETCH_NEXT_QUESTION_SUCCESS,
  FETCH_NEXT_QUESTION_ERROR,
} from '../actions/questions';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_NEXT_QUESTION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_NEXT_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
        error: null
      });
    case FETCH_NEXT_QUESTION_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default: return state;
  }
}
