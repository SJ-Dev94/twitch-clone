import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import history from '../../history';
import { fb, auth } from '../../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../../actions';
import { Button, Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import SignInForm from './SignInForm'


function SignInModal(props) {
  return (
    <Modal modalShow="true"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Log in to TwitchClone
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <SignInForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Log in with Facebook</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default SignInModal;