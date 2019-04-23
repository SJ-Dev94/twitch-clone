import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import { auth } from '../../firebaseconfig';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class UserSignUpModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE };
  }


  onSubmit = e => {
    e.preventDefault();
    const { username, email, passwordOne } = this.state;

    auth.createUserWithEmailAndPassword(email, passwordOne).then(user => {
      user = auth.currentUser;
      this.setState({ ...INITIAL_STATE })
      user.updateProfile({
        displayName: username
      })
    }).catch(error => {
      this.setState({ error });
    });

    history.push('/');
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onDismiss = () => {
    history.push('/');
  }

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return ReactDOM.createPortal(
      <div onClick={this.onDismiss} className="ui dimmer modals visible active" >
        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
          <form onSubmit={this.onSubmit}>
            <input
              name='username'
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Username"
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">Sign Up</button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }

};

export default UserSignUpModal;