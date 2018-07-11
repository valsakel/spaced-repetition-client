import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import questionsReducer from './reducers/questions-reducer';
import answerReducer from './reducers/answer-reducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  questions: questionsReducer,
  answer: answerReducer
});
