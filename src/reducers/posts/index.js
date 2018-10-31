import * as types from '../../actions/posts/types';

const initialState = {
  posts: {},
  activePost: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS.SUCCESS:
      return { ...state, posts: action.payload.data };
    default:
      return state;
  }
};

export default appReducer;
