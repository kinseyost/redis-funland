import { fromJS, Map } from 'immutable';
import * as types from '../constants/userConstants.js';

export default function userReducers(state = new Map(), action) {
  switch (action.type) {
    case types.FETCH_USERS:
      return action.users ? fromJS(action.users) : state;
    default:
      return state;
  }
}
