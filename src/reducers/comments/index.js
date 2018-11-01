import * as types from '../../actions/comments/types';


const initialState = {
  comments: {}
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS.SUCCESS: {
      const {postId, items, page} = action.payload.data;
      return {
        ...state,
        comments:  {
          [postId]: {
            [page]: items
          }
      }};
    }
    default:
      return state;
  }
};

export default commentsReducer;
