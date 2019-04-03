import {
  SIGN_IN,
  SIGN_OUT,
  ADD_USER_TO_STATE,
  EDIT_USER_SETTINGS
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state, isSignedIn: true, userId: action.payload,
      }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    case ADD_USER_TO_STATE:
      return [...state, action.payload];
    case EDIT_USER_SETTINGS:
      return [...state, action.payload];
    default:
      return state;
  }
}