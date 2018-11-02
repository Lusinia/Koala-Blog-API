import * as appActions from '../app';
import * as types from './types';

import * as api from './api';
import { normalizeArray } from '../../services';


export const getPosts = () => async dispatch => {
  try {
    const res = await api.getPosts();
    dispatch({ type: types.GET_POSTS.SUCCESS, payload: { data: normalizeArray(res.data, '_id') } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const getPost = id => async dispatch => {
  try {
    const res = await api.getPost(id);
    dispatch({ type: types.GET_POST.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const createPost = data => async dispatch => {
  try {
    const res = await api.createPost(data);
    dispatch({ type: types.CREATE_POST.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const editPost = (data, id) => async dispatch => {
  try {
    const res = await api.editPost(data, id);
    dispatch({ type: types.EDIT_POST.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);
    dispatch({ type: types.DELETE_POST.SUCCESS, payload: { data: id } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};
