import * as types from './types';
import * as api from './api';


export const signUp = data => async dispatch => {
  try {
    const res = await api.signUp(data);
    dispatch({ type: types.SIGN_UP.SUCCESS, payload: { data: res.data }}  );
  } catch (error) {
    console.log('error', error.message);
  }
};

export const signIn = data => async dispatch => {
  try {
    const res = await api.signIn(data);
    dispatch({ type: types.SIGN_IN.SUCCESS, payload: { data: res.data }}  );
  } catch (error) {
    console.log('error', error.message);
  }
};
