import React from 'react';
import { auth } from '../../firebaseconfig';
import { connect } from 'react-redux';
import { signOut } from '../../actions'
var user = auth.currentUser;

class SignOutComponent extends React.Component {

  signOutFunction = () => {
    /*auth.signOut();*/
    /*this.props.signOut();*/
  }

  UserSignOutButton = () => {
    return <button type="button" onClick={this.signOutFunction}> Sign Out </button>
  }

  render() {
    return (<this.UserSignOutButton />);

  }



}





const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signOut })(SignOutComponent);

