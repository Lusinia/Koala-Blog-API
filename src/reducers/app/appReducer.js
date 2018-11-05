import _ from 'lodash';
import * as types from '../../actions/app/types';


const initialState = {
  name: 'Click the button to see the name',
  isLoading: {
    entities: {}
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SET_APP_NAME:
    return { ...state, name: action.payload };
  case types.SET_LOADING:
    return {
      ...state,
      isLoading: {
        entities: {
          ...state.isLoading.entities,
          [action.payload]: true
        }
      }
    };
  case types.CLEAR_LOADING: {
    const newList = _.omit(state.isLoading.entities, action.payload);
    return {
      ...state,
      isLoading: {
        entities: {
          ...newList
        }
      }
    };
  }
  default:
    return state;
  }
};

export default appReducer;
