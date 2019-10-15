import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import history from '../../history';
import { fb, auth } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions';
import { Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'

const currentUser = auth.currentUser;

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


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
      <div onClick={this.onDismiss} >
        <div onClick={(e) => e.stopPropagation()} >
          <MyVerticallyCenteredModal />
          {/*<form onSubmit={this.onSubmit}>
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
    */}
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