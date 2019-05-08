import {
  SIGN_IN,
  SIGN_OUT,
  ADD_USER_TO_STATE,
  UPDATE_USER_STATE,
  EDIT_USER_SETTINGS,
  UPDATE_USER_PROFILE_PIC,
  UPDATE_USER_PROFILE_BANNER,
  UPDATE_USER_DISPLAY_NAME
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userInfo: {
    displayName: null,
    userAvi: null,
    userEmail: null,
    userFirstName: null,
    userId: null,
    userLastName: null,
    userBanner: null
  },

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state, isSignedIn: true, userId: action.payload
      }
    case SIGN_OUT:
      return { ...state, userInfo: null, isSignedIn: false, userId: null }
    case ADD_USER_TO_STATE:
      return { ...state, userInfo: action.payload, isSignedIn: true };
    case UPDATE_USER_STATE:
      return { userInfo: action.payload };
    case UPDATE_USER_PROFILE_PIC:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          photoURL: action.payload
        }
      };
    case UPDATE_USER_DISPLAY_NAME:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          uid: action.payload
        }
      };
    case UPDATE_USER_PROFILE_BANNER:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          userBanner: action.payload
        }
      };
    case EDIT_USER_SETTINGS:
      return [...state, action.payload];
    default:
      return state;
  }
}