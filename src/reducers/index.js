import { combineReducers } from 'redux';

import app from './app';
import posts from './posts';
import auth from './auth';

const rootReducer = combineReducers({
  app,
  posts,
  auth
});

export default rootReducer;
