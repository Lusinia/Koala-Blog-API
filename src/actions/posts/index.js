import * as types from './types';

import * as api from './api';
import {normalizeArray} from '../../../src/services';


export const getPosts = () => async dispatch => {
  try {
    const res = await api.getPosts();
    dispatch({ type: types.GET_POSTS.SUCCESS, payload: { data: normalizeArray(res.data.data, '_id') } });
  } catch (error) {
    console.log('error', error.message);
  }
};
