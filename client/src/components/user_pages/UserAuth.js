import { connect } from 'react-redux';
import { auth } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions'

const UserAuth = () => {
  auth.onAuthStateChanged((user) => {

    if (user) {
      this.props.addUserInfoToState(user);

    }

  })
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut, addUserInfoToState })(UserAuth);