import React from 'react';
import { database } from '../firebaseconfig.js';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'
import { SIGN_IN, SIGN_OUT } from '../actions/types';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          "732169580730-274cra0bjoll5abgotonl7rg9i0fd680.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }



  onAuthChange = (isSignedIn) => {
    let googleUserInfo = [];


    if (isSignedIn) {
      googleUserInfo.push(this.auth.currentUser.Ab.w3)

      googleUserInfo = googleUserInfo.map(x => {
        return {
          userId: x.Eea,
          userAvi: x.Paa,
          userEmail: x.U3,
          displayName: x.ig,
          userFirstName: x.ofa,
          userLastName: x.wea
        }
      })

      const ref = database.ref("users");

      //how to use streamsnapshot with googleuserinfoobject
      ref.orderByChild(`userId`).equalTo(googleUserInfo[0].userId).once('value', streamSnapshot => {
        streamSnapshot.forEach((child) => {

          googleUserInfo[0] = (child.val())

          console.log(googleUserInfo[0].userId)
          this.props.signIn(googleUserInfo[0].userId);
        })
      });

    }

    else {
      this.props.signOut();
    }

  }


  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button"><i className="google icon" />Sign In with Google</button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);