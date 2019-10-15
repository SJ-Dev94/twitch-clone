import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { auth } from '../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../actions'
import SignOutButton from './user_pages/UserSignOut';
import SignInModal from './user_pages/SignInModal'

import { Navbar, Nav, Dropdown, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'

//add js to change ui based on user login

const UserAviDisplay = () => {
  return (
    <Image src={this.props.userAvi} roundedCircle><Nav.Dropdown></Nav.Dropdown></Image>
  )
}


const LoginButtonRender = (e) => {
  return (
    <Nav.Link href="" onClick={e} >Login</Nav.Link>
  )
}



const SignUpButtonRender = () => {
  return (
    <Nav.Link href="#home" >Signup</Nav.Link>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  toggleModalShow = () => {
    if (!this.state.showModal) {
      this.setState({ showModal: true })
    } else {
      this.setState({ showModal: false })
    }
  }

  LoginButtonRender = (props) => {
    return (
      <Nav.Link href="" onClick={props.onClick} >Login</Nav.Link>
    )
  }


  render() {
    const modalState = this.state.showModal;


    const changeModalState = () => {
      if (!modalState) {
        this.setState({ showModal: true })
      } else {
        this.setState({ showModal: false })
      }

    }

    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">Twitch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Discover</Nav.Link>
              <Nav.Link href="#link">Following</Nav.Link>
            </Nav>
            <SignInModal show={this.state.showModal} />
            <Nav.Link href="#home" onClick={changeModalState}>Login</Nav.Link>
            <Nav.Link href="#home">Sign Up</Nav.Link>
          </Navbar.Collapse>
        </Navbar>


        {/* <Link to="/">
          <i className="fab fa-twitch"></i>
        </Link>
        <Link to="/">
          Discover
      </Link>
        <Link to="/">
          Following
      </Link>

        <Link to="/signIn">Log In</Link>

        <SignOutButton />
        <Link to="/signUp">Sign Up</Link>

        <Link to="/">
          ...
      </Link>

        <div >

          <div>
            <div >
              <input type="text" placeholder="Search..." />
              <i />

            </div>
          </div>

          <div >
            <div>
              <img src={this.props.userAvi} alt="User AVI"></img>
              <p>{this.props.displayName}</p>
              <i ></i>
              <div >
                <div>Channel</div>
                <div>Dashboard</div>
                <div>Friends</div>
                <Link to="settings/profile">Settings</Link>
                <div><GoogleAuth /></div>
              </div>
            </div>
          </div>
        </div> */}
      </div >
    )
  }
}


const mapStateToProps = (state) => {

  return {
    userAvi: state.auth && state.auth.userInfo ? state.auth.userInfo.photoURL : null,
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}

export default connect(mapStateToProps, { addUserInfoToState })(Header);
