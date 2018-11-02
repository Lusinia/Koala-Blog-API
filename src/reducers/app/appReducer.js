import * as types from '../../actions/app/types';

const initialState = {
  name: 'Click the button to see the name'
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_APP_NAME:
    return { ...state, name: action.payload };
  default:
    return state;
  }
};

export default appReducer;
