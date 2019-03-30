import {
  EDIT_USER_SETTINGS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case EDIT_USER_SETTINGS:
      return [...state, action.payload];
    default:
      return state;
  }
}