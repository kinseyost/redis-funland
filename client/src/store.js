import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { ioMiddleware } from './middleware';
import thunk from 'redux-thunk';

const initialState = new Immutable.Map();
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk, ioMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
