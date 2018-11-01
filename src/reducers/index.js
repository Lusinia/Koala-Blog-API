import { combineReducers } from 'redux';

import app from './app';
import posts from './posts';
import auth from './auth';
import comments from './comments';

const rootReducer = combineReducers({
  app,
  posts,
  auth,
  comments
});

export default rootReducer;
