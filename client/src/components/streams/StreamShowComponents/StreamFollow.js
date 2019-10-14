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
    this.displayName = this.props.displayName;
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
      uid: this.props.uid,
      displayName: this.props.displayName
    }
    //use followerRef as the node to check children, then check if child exists, if child doesnt exist, and child != this.signedInUserId (create this), create follow

    followerRef.push(followerInfoObject);

  }

  //creates a following object under the users uid 
  testfunc = () => {
    return;
  }
  //Add in checks to see if following object already exists. We can't follow someone multiple times
  createFollowing = (user) => {
    const followingRef = database.ref(`User_Follow_Info/${user}/Following`);

    const followingInfoObject = {
      uid: this.props.streamCreatorUid,
      displayName: this.props.streamCreatorDisplayName
    }

    //current position c1as of 8/22/2019: the data model is working properly, with followers and followings going to the right place. now add in your checks to make sure the follow/following does not already exist

    console.log(this.streamCreatorDisplayName)
    //Check to see if follow already exists. 
    /*followingRef.once('value', function (snapshot) {
      if (snapshot.hasChild(DATA HERE)) {
        alert('exists');
      }
    }); */
    //var isSignedIn = this.isSignedIn;

    //you left off here <----  this is untested
    /*followingRef.child('Following').orderByChild('uid').equalTo(this.props.uid).on('value', snapshot => {

      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        console.log(data.key);
      });

      console.log(snapshot.val());
      console.log(this.streamCreatorUid);
      if (isSignedIn) {
        console.log(snapshot.val())
        followingRef.push(followingInfoObject);
        return
      } else {
        return
      }
    })
    */
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
      this.createFollowing(this.props.uid);
      this.createFollower(this.props.streamCreatorUid);
    } else {
      //add in a sign in modal if user is not logged in
      console.log('please sign in')
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