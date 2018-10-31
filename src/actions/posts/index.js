import * as types from './types';

import * as api from './api';
import {normalizeArray} from '../../../src/services';


export const getPosts = () => async dispatch => {
  try {
    const res = await api.getPosts();
    dispatch({ type: types.GET_POSTS.SUCCESS, payload: { data: normalizeArray(res.data, '_id') } });
  } catch (error) {
    console.log('error', error.message);
  }
};

export const getPost = id => async dispatch => {
  try {
    const res = await api.getPost(id);
    dispatch({ type: types.GET_POST.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    console.log('error', error.message);
  }
};
