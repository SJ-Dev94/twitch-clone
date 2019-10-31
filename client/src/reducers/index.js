import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import windowSize from './windowSizeReducer'


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  windowSize: windowSize,
});