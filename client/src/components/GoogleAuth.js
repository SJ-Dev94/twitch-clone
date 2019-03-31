import React from 'react';
import { database } from '../firebaseconfig.js';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

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

  //Currently this is adding a 0 to our firebase data, which means its storing as an array, but its confusing because i'm not storing it as an array
  //this only happens on login logout, refresh does not happen.

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      /*let googleUserInfo = [];
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
      const arrayToObject = (x) => x.reduce((obj, item) => {
        obj[item.id] = item;
        return obj
      });

      const googleUserInfoObject = arrayToObject(googleUserInfo);
      console.log(googleUserInfoObject);

      const ref = database.ref("users");

      ref.orderByChild(`userId`).equalTo(googleUserInfoObject.userId).once('value', streamSnapshot => {
        if (streamSnapshot.exists()) {
          return
        } else {
          ref.push(googleUserInfoObject);
        }
      });
      */
    } else {
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