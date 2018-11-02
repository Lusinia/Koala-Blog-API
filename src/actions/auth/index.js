import * as types from './types';
import * as api from './api';
import * as appActions from '../app';

export const signUp = data => async dispatch => {
  try {
    const res = await api.signUp(data);
    const { token } = res.data;
    localStorage.setItem('token', token);
    dispatch({ type: types.SIGN_UP.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};

export const signIn = data => async dispatch => {
  try {
    const res = await api.signIn(data);
    const { token } = res.data;
    localStorage.setItem('token', token);
    dispatch({ type: types.SIGN_IN.SUCCESS, payload: { data: res.data } });
  } catch (error) {
    dispatch(appActions.setError(error.message));
  }
};
