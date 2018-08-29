import { combineReducers } from 'redux-immutablejs';
import userInfo from './userReducers.js';
import components from './componentReducers.js';
import date from './dateReducer.js';

export default combineReducers({
  userInfo,
  components,
  date,
});
