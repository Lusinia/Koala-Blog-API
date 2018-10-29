import * as types from './actionTypes';
import * as api from './api';
import {normalizeArray} from '/src/services';


export const getPosts = () => async dispatch => {
  try {
    const res = await api.getPosts();
    console.log('res.data', res.data);
    dispatch({ type: types.GET_POSTS, payload: { data: normalizeArray(res.data) } });
  } catch (error) {
    console.log('error', error.message);
  }
};
