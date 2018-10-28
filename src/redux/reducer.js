import { combineReducers } from 'redux';
import posts from './reducers/posts';
import authUser from './reducers/authUser';
import common from './reducers/common';

export default combineReducers({
  posts,
  authUser,
  common
});
