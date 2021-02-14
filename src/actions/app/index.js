import * as types from './types';

export const setName = name => ({
  type: types.SET_APP_NAME,
  payload: name
});

export const setError = name => ({
  type: types.SET_APP_NAME,
  payload: name
});

export const setLoading = payload => dispatch => {
  dispatch({ type: types.SET_LOADING, payload });
};
export const clearLoading = payload => dispatch => {
  dispatch({ type: types.CLEAR_LOADING, payload });
};
