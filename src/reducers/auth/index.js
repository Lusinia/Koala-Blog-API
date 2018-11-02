import * as types from '../../actions/auth/types';


const initialState = {
  userInfo: {},
  token: null,
  isLoggedIn: false,
  signinError: '',
  signupError: ''
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGN_IN.SUCCESS:
  case types.SIGN_UP.SUCCESS: {
    const { user, token } = action.payload.data;
    return { ...state, token, userInfo: user, signinError: '', signupError: '' };
  }
  case types.SIGN_UP.ERROR: {
    return { ...state, signupError: action.payload.data };
  }
  case types.SIGN_IN.ERROR: {
    return { ...state, signinError: action.payload.data };
  }
  default:
    return state;
  }
};

export default postReducer;
