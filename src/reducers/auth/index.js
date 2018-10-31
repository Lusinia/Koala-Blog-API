import * as types from '../../actions/auth/types';

const initialState = {
  userInfo: {},
  token: null,
  isLoggedIn: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP.SUCCESS: {
      const  {user, token} = action.payload.data;
      console.log('user, token', user, token);
      return { ...state, token, userInfo: user };

    }
    default:
      return state;
  }
};

export default postReducer;