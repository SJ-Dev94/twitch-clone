import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import { auth } from '../../firebaseconfig';
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class UserSignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE };
    this.email = React.createRef();
    this.password = React.createRef();
    this.username = React.createRef();
  }


  onSubmit = e => {
    const username = this.username.current.value;
    const email = this.email.current.value;
    const password = this.password.current.value;

    auth.createUserWithEmailAndPassword(email, password).then(user => {
      user = auth.currentUser;
      user.updateProfile({
        displayName: username
      })
      console.log(user);
    }).catch(error => {
      console.log(error)
    });

    //history.push('/');
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onDismiss = () => {
    history.push('/');
  }

  render() {
    return (
   <Form onSubmit={e => {this.onSubmit()}}>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" ref={this.username} />
  </Form.Group>

   <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={this.password} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" ref={this.email} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>


  
    );
  }

};

export default UserSignUpForm;