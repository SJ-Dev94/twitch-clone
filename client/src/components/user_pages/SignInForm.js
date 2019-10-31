import React from 'react';
import ReactDOM from 'react-dom';
import { fb, auth, providers } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions';
import history from '../../history';
import { Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE };
    this.email = React.createRef();
    this.password = React.createRef();
  }
  onSubmit = e => {
    const email = this.email.current.value;
    const password = this.password.current.value;

   auth.setPersistence(fb.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithEmailAndPassword(email, password).then((user) => { 
        this.setState({ ...INITIAL_STATE });
        console.log('worked');
        console.log(user);
        history.push('/')
      }).catch(error => {
        this.setState({ error });
      })
    })
  }

  authWithEmailPassword = (e)  => {
    e.preventDefault();
    console.log('auth successful');
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onDismiss = () => {
    history.push('/');
  }

  renderForm() {
    return (
      <Form onSubmit={e => {this.onSubmit()}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={this.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={this.password} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    )
  }

  render() {
    return (
      this.renderForm()
    )
  }
}
