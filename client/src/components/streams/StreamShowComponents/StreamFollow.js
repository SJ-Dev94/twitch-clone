import React from 'react';
import { database } from '../../../firebaseconfig.js';
import { connect } from 'react-redux';

//Under the UserFollowInfo/{uid} we will have two objects, *Followers* and *Following*.

//If isSignedIn === true onClick, send a new follower property containing the uid and the userName to the UserFollowInfo/{user} of the stream creator. uid and isSignedIn will be obtained from the mapStateToProps function

//FIREBASE DATA STRUCTURE

/*
-User_Follow_Info
  -User {THIS IS ALWAYS THE USERS UID}
    -Following
    -Follower

*/

//under your auth piece of redux state, add in a following object, and add in your reducer/action to accomadate the state change. Following should be the only piece of UserFollowInfo under handled under redux state

//After that, send a following object containing the uid and userName of the streamer to your own `UserFollowInfo object. 

//In the future, add in notifications to see when you're being followed.


class StreamFollow extends React.Component {
  constructor(props) {
    super(props);
    this.uid = this.props.uid;
    this.displayName = this.props.displayName
    this.streamCreatorUid = this.props.streamCreatorUid;
    this.streamCreatorDisplayName = this.props.streamCreatorDisplayName;
  }

  componentShouldUpdate(prevProps) {
    if (this.props.uid !== prevProps.uid) {
      this.uid = this.props.uid
    }

    if (this.props.streamCreatorUid !== prevProps.streamCreatorUid) {
      this.streamCreatorUid = this.props.streamCreatorUid;
    }
  }

  //creates a follower object under the stream creators uid
  createFollower = (e) => {
    const followerRef = database.ref(`User_Follow_Info/${e}/Follower`)

    const followerInfoObject = {
      uid: this.uid,
      displayName: this.displayName
    }

    followerRef.push(followerInfoObject);
  }

  //creates a following object under the users uid 

  //Add in checks to see if following object already exists. We can't follow someone multiple times
  createFollowing = (user) => {
    const followingRef = database.ref(`User_Follow_Info/${user}/Following`);

    const followingInfoObject = {
      uid: this.streamCreatorUid,
      displayName: this.streamCreatorDisplayName
    }

    //Check to see if follow already exists. 
    /*followingRef.once('value', function (snapshot) {
      if (snapshot.hasChild(DATA HERE)) {
        alert('exists');
      }
    }); */

    followingRef.push(followingInfoObject);

  }

  //const streamId = uuidv4();
  //const stream = { ...formValues, uid, streamId };
  //await ref.push(stream);
  // dispatch({ type: CREATE_STREAM, payload: stream });

  //Navigation to get user back to streams list
  // history.push('/');


  onSubmit = () => {
    if (this.props.isSignedIn === true) {
      this.createFollowing(this.uid);
      this.createFollower(this.streamCreatorUid);
    } else {
      //add in a sign in modal if user is not logged in
      console.log('please sign i ')
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onSubmit}>Follow</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null,
    uid: state.auth && state.auth.userInfo ? state.auth.userInfo.uid : null,
    streamCreatorUid: state.streams && state.streams[0] ? state.streams[0].uid : null,
    streamCreatorDisplayName: state.streams && state.streams[0] ? state.streams[0].displayName : null,
  }
}

export default connect(mapStateToProps)(StreamFollow);