import * as types from '../../actions/posts/types';

const initialState = {
  posts: {},
  activePost: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS.SUCCESS:
      return { ...state, posts: action.payload.data };
    case types.GET_POST.SUCCESS: {
      return { ...state, activePost: action.payload.data };
    }
    default:
      return state;
  }
};

export default postReducer;
