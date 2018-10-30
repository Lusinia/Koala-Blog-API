import * as types from './types';

export const setName = name => ({
  type: types.SET_APP_NAME,
  payload: name,
});
