import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import history from '../../history';
import { fb, auth } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions'


const currentUser = auth.currentUser;

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class UserSignInModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE };
  }


  onSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();

    auth.setPersistence(fb.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithEmailAndPassword(email, password).then((user) => {
        this.setState({ ...INITIAL_STATE });

        history.push('/')
      }).catch(error => {
        this.setState({ error });
      })
    })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onDismiss = () => {
    history.push('/');
  }

  render() {

    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid = password === '' || email === '';

    return ReactDOM.createPortal(
      <div onClick={this.onDismiss} className="ui dimmer modals visible active" >
        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
          <form onSubmit={this.onSubmit}>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">Sign In</button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }

};


const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, addUserInfoToState })(UserSignInModal);