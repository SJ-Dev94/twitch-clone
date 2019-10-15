import React from 'react';
import { database } from '../../../firebaseconfig.js';
import { connect } from 'react-redux';

class StreamFollow extends React.Component {


  //Under the UserFollowInfo/{uid} we will have two objects, *Followers* and *Following*.

  //If isSignedIn === true onClick, send a new follower property containing the uid and the userName to the UserFollowInfo/{user} of the stream creator. uid and isSignedIn will be obtained from the mapStateToProps function

  //under your auth piece of redux state, add in a following object, and add in your reducer/action to accomadate the state change. Following should be the only piece of UserFollowInfo under handled under redux state

  //After that, send a following object containing the uid and userName of the streamer to your own `UserFollowInfo object. 

  //In the future, add in notifications to see when you're being followed.

  createFollow = (e) => {
    return async (getState) => {
      const { uid } = getState().auth.userInfo;

      const ref = database.ref(``);


      /* userId: 
      */
      console.log('t')
      //const streamId = uuidv4();
      //const stream = { ...formValues, uid, streamId };
      //await ref.push(stream);
      // dispatch({ type: CREATE_STREAM, payload: stream });

      //Navigation to get user back to streams list
      // history.push('/');
    };
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.isSignedIn === true) {
      this.createFollow();
    }
  }

  render() {
    return (
      <div>
        <button onSubmit={this.onSubmit}>Follow</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}

export default connect(mapStateToProps)(StreamFollow);