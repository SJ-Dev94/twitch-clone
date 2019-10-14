import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { auth } from '../firebaseconfig';
import { signIn, signOut, addUserInfoToState } from '../actions'
import SignOutButton from './user_pages/UserSignOut';

//add js to change ui based on user login
class Header extends React.Component {


  render() {
    return (
      <div>


        <Link to="/">
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
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    userAvi: state.auth && state.auth.userInfo ? state.auth.userInfo.photoURL : null,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}

export default connect(mapStateToProps, { addUserInfoToState })(Header);
