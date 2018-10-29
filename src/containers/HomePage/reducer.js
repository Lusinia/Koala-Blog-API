import { fromJS } from 'immutable';

import * as types from './actionTypes';

const initialState = fromJS({
  posts: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        posts: action.payload.data
      };
    default:
      return state;
  }
}

export default homeReducer;
