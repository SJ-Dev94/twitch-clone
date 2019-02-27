import { ref } from '../firebaseconfig.js';
import streams from '../apis/streams';
import axios from 'axios';

import history from '../history'
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
  } from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

//This is currently uploading data to our database but we're running into an error. Dig into this
//pretty sure this is because axios isnt being used properly in my push request so response.data is not defined because its not using axios (.data is an axios thing)
export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const stream = { ...formValues, userId };
    await ref.push(stream);
    dispatch({ type: CREATE_STREAM, payload: stream});

    //Navigation to get user back to streams list
    history.push('/');
  };
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('streams');
  dispatch({type: FETCH_STREAMS, payload: response.data});
} 
export const fetchStream = (id) =>
async dispatch => {
  const response = await streams.get(`/streams/${id}`)

  dispatch({ type: FETCH_STREAM, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues)
  
  dispatch({type: EDIT_STREAM, payload: response.data});
  history.push('/');
}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)

  dispatch({type: DELETE_STREAM, payload: id})
  history.push('/');
} 
