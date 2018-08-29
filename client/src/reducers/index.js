import { combineReducers } from 'redux-immutablejs';
import users from './userReducers.js';
import components from './componentReducers.js';
import date from './dateReducer.js';

export default combineReducers({
  users,
  components,
  date,
});
