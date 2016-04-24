import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  messages: messageReducer,
  form: formReducer
});

export default rootReducer;
