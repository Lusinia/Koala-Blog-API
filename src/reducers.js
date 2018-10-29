
import { combineReducers } from 'redux';
import core from './containers/App/reducer';
import home from './containers/HomePage/reducer';

const reducers = {
  core, home
};

export default combineReducers(reducers);

