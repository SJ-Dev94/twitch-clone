import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  EDIT_USER_SETTINGS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.streams;
    case FETCH_STREAM:
      return action.streams;
    case CREATE_STREAM:
      return [...state, action.payload];
    case EDIT_STREAM:
      return [...state, action.payload];
    case DELETE_STREAM:
      return _.filter(state, action.payload);
    case EDIT_USER_SETTINGS:
      return [...state, action.payload];
    default:
      return state;
  }
}