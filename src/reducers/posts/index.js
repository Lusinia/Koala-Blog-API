import * as types from '../../actions/posts/types';
import _ from 'lodash';


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
    case types.CREATE_POST.SUCCESS:
    case types.EDIT_POST.SUCCESS: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.data._id]: action.payload.data
        }
      };
    }
    case types.DELETE_POST.SUCCESS: {
      const newState = _.omit(state.posts, [action.payload.data])
      return {
        ...state,
        posts: newState
      };
    }
    default:
      return state;
  }
};

export default postReducer;
