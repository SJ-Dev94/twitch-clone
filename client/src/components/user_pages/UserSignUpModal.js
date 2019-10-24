import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import { fb, auth } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions';
import { Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import SignInForm from './SignInForm'
import UserSignUpForm from './userSignUpForm'


const UserSignUpModal = (props) => {
    return (
      <Modal modalShow="true"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        <Modal.Title>Join TwitchClone Today</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <UserSignUpForm/>
      </Modal.Body>
    </Modal>
    )
  }


export default UserSignUpModal;