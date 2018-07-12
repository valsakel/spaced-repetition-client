import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import questions from './reducers/questions';
import answerReducer from './reducers/answer-reducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  questions,
  answer: answerReducer
});
