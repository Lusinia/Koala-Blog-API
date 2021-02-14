import * as types from '../../actions/auth/types';


const initialState = {
  userInfo: {},
  token: null,
  isLoggedIn: false,
  isStartSession: true,
  signinError: '',
  signupError: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGN_IN.SUCCESS:
  case types.SIGN_UP.SUCCESS: {
    const { user, token } = action.payload.data;
    return { ...state, token, userInfo: user, signinError: '', signupError: '', isLoggedIn: true, isStartSession: false };
  }
  case types.SIGN_UP.ERROR: {
    return { ...state, signupError: action.payload.data, isLoggedIn: false };
  }
  case types.SIGN_IN.ERROR: {
    return { ...state, signinError: action.payload.data, isLoggedIn: false };
  }
  case types.SIGN_QUICK.ERROR: {
    return { ...state, signinError: action.payload.data, isLoggedIn: false };
  }
  case types.SIGN_QUICK.SUCCESS: {
    return { ...state, signinError: action.payload.data, isLoggedIn: true, isStartSession: false };
  }
  case types.SIGN_OUT: {
    return { ...state, ...initialState };
  }
  default:
    return state;
  }
};

export default authReducer;
