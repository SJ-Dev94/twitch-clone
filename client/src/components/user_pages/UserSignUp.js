import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserSignUpModal from '../user_pages/UserSignUpModal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {

  }



  onSubmit = event => {

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {

    return (
      <UserSignUpModal />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(SignUpForm);