import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type){
    case FETCH_STREAMS:
      console.log(action.streams)
      return action.streams;
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      //debugger;
      debugger;
      return [...state, action.stream];
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    /* case DELETE_STREAM:
      return _.omit(state, action.payload); */
    default: 
      return state;
  }
}