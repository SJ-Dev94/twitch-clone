import { database } from '../firebaseconfig.js';
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
const uuidv4 = require('uuid/v4');


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
    const ref = database.ref("streams");
    const { userId } = getState().auth;
    const streamId = uuidv4();
    const stream = { ...formValues, userId, streamId };
    console.log(stream);
    await ref.push(stream);
    dispatch({ type: CREATE_STREAM, payload: stream });

    //Navigation to get user back to streams list
    history.push('/');
  };
};

export const getStreams = (streams) => ({ type: FETCH_STREAMS, streams });

//left off at figuring out how to get the unique key of each stream
export const fetchStreams = () =>
  async dispatch => {
    const ref = database.ref("streams");
    const result = [];
    await ref.on('value', snapshot => {
      snapshot.forEach(streamSnapshot => {
        const streamListSnapshot = streamSnapshot.val();
        result.push(streamListSnapshot);
      });
      dispatch(getStreams(result));
    });

  }

/* function getStreamData(streamId) {
async () => {
  const ref = database.ref(`users/${streamId}`.once('value'));
  await (snapshot) => {
    var streamId = snapshot.key;
  }
}
}

*/
export const getStream = (streams) => ({ type: FETCH_STREAM, streams });

export const fetchStream = (id) =>
  async dispatch => {
    const ref = database.ref("streams");
    const result = [];
    console.log(result);
    await ref.orderByChild(`title`).equalTo(id).on('value', streamSnapshot => {
      streamSnapshot.forEach(child => {
        const stream = child.val();
        result.push(stream);
      });
      dispatch(getStream(result));
    });

  };

export const editStreamAction = (stream) => ({ type: EDIT_STREAM, payload: stream });
//currently working on this
//https://firebase.google.com/docs/database/web/read-and-write
export const editStream = (id, formValues) => async dispatch => {

  const ref = database.ref(`streams`);
  const result = [];
  await ref.orderByChild(`title`).equalTo(id).on('value', streamSnapshot => {
    streamSnapshot.forEach(child => {
      const x = child.ref.update({ title: formValues.title, description: formValues.description });
      result.push(x);
    });
    dispatch(editStreamAction(result));
    history.push('/');
  });

  /*const ref = null;
  const response = await ref.update(`/streams/${id}`, formValues)*/

}

export const deleteStreamAction = (stream) => ({ type: DELETE_STREAM, payload: stream });

export const deleteStream = (id) => async dispatch => {
  const ref = database.ref(`streams`);
  const result = [];
  await ref.orderByChild(`title`).equalTo(id).on('value', streamSnapshot => {
    streamSnapshot.forEach(child => {
      const x = child.ref.remove();
      result.push(x);
    });
    dispatch(deleteStreamAction(result));
    history.push('/');
  });
  history.push('/');
} 
