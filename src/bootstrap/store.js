import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const isDevelopment = process.env.NODE_ENV !== 'production';

const middlewares = [
  thunk,
  isDevelopment && logger,
].filter(Boolean);

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
