import _ from 'lodash';
import * as types from '../../actions/comments/types';
import { COMMENTS_LIMIT } from '../../constants';


const initialState = {
  comments: {}
};

const commentsReducer = (state = initialState, action) => {
  const maxPageNumber = postId => Math.ceil(_.get(state.comments, `[${postId}].count`, 1) / COMMENTS_LIMIT);

  switch (action.type) {
  case types.GET_COMMENTS.SUCCESS: {
    const { postId, items, page, count } = action.payload.data;
    return {
      ...state,
      comments: {
        ...state.comments,
        [postId]: {
          ...state.comments[postId],
          [page]: items,
          count
        }
      }
    };
  }
  case types.CREATE_COMMENT.SUCCESS: {
    const { post, _id } = action.payload.data;
    return {
      ...state,
      comments: {
        [post]: {
          ...state.comments[post],
          [maxPageNumber(post)]: {
            ...state.comments[post][maxPageNumber(post)],
            [_id]: action.payload.data
          },
          count: state.comments[post].count + 1
        }
      }
    };
  }
  default:
    return state;
  }
};

export default commentsReducer;
