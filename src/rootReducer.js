import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import questions from './reducers/questions';
import answers from './reducers/answers';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  questions,
  answers,
});
