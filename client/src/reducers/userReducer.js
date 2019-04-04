import {
  ADD_USER_TO_STATE,
  EDIT_USER_SETTINGS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER_TO_STATE:
      return [...state, action.payload];
    case EDIT_USER_SETTINGS:
      return [...state, action.payload];
    default:
      return state;
  }
}