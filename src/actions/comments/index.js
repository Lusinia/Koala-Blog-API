import * as constants from '../../constants';
import * as types from './types';

import * as api from './api';
import { normalizeArray } from '../../services';
import * as appActions from '../app';


const { COMMENTS_LIMIT } = constants;

export const getComments = (id, page) => async dispatch => {
  try {
    const query = { limit: COMMENTS_LIMIT, page };
    const res = await api.getComments(id, query);
    const { post } = res.data.data[0];

    dispatch({
      type: types.GET_COMMENTS.SUCCESS,
      payload: {
        data: {
          ...normalizeArray(res.data.data, '_id'),
          count: res.data.maxCount,
          postId: post,
          page: query.page || 1
        }
      }
    });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const getComment = (postId, id) => async dispatch => {
  try {
    const res = await api.getComment(postId, id);
    dispatch({ type: types.GET_COMMENT.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const createComment = (id, data) => async dispatch => {
  try {
    dispatch(appActions.setLoading(types.CREATE_COMMENT.SUCCESS));
    const res = await api.createComment(id, data);
    dispatch({ type: types.CREATE_COMMENT.SUCCESS, payload: { data: res.data } });
    dispatch(appActions.clearLoading(types.CREATE_COMMENT.SUCCESS));
  } catch (error) {
    dispatch({ type: types.CREATE_COMMENT.ERROR, payload: { data: error.data } });
    dispatch(appActions.clearLoading(types.CREATE_COMMENT.SUCCESS));
  }
};

export const editComment = (postId, id, data) => async dispatch => {
  try {
    const res = await api.editComment(postId, id, data);
    dispatch({ type: types.EDIT_COMMENT.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const deleteComment = (postId, id) => async dispatch => {
  try {
    await api.deleteComment(postId, id);
    dispatch({ type: types.DELETE_COMMENT.SUCCESS, payload: { data: id } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};
