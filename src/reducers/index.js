import { combineReducers } from 'redux';

import appReducer from './app';
import postsReducer from './posts';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
});

export default rootReducer;
