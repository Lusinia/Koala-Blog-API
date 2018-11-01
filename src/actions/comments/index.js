import * as constants from '../../constants';
import * as types from './types';

import * as api from './api';
import {normalizeArray} from '../../../src/services';

const { COMMENTS_LIMIT } = constants;

export const getComments = (id, query = { limit: COMMENTS_LIMIT, page: 1 }) => async dispatch => {
  try {
    const res = await api.getComments(id, query);
    const {post} = res.data[0];
    dispatch({
      type: types.GET_COMMENTS.SUCCESS,
      payload: { data: {...normalizeArray(res.data, '_id'), postId: post, page: query.page || 1 } } });
  } catch (error) {
    console.log('error', error.message);
  }
};

export const getComment = (postId, id) => async dispatch => {
  try {
    const res = await api.getComment(postId, id);
    dispatch({ type: types.GET_COMMENT.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    console.log('error', error.message);
  }
};

export const createComment = (postId, id, data) => async dispatch => {
  try {
    const res = await api.createComment(postId, id, data);
    dispatch({ type: types.CREATE_COMMENT.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    console.log('error', error.message);
  }
};

export const editComment = (postId, id, data) => async dispatch => {
  try {
    const res = await api.editComment(postId, id, data);
    dispatch({ type: types.EDIT_COMMENT.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    console.log('error', error.message);
  }
};

export const deleteComment = (postId, id) => async dispatch => {
  try {
    await api.deleteComment(postId, id);
    dispatch({ type: types.DELETE_COMMENT.SUCCESS, payload: { data: id } });
  } catch (error) {
    console.log('error', error.message);
  }
};
