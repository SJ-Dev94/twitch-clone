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
      <div className="ui secondary pointing menu">


        <Link to="/" className="item">
          <i className="fab fa-twitch"></i>
        </Link>
        <Link to="/" className="item">
          Discover
      </Link>
        <Link to="/" className="item">
          Following
      </Link>

        <Link to="/signIn">Log In</Link>

        <SignOutButton />
        <Link to="/signUp">Sign Up</Link>

        <Link to="/" className="item">
          ...
      </Link>
        <div className="right menu">

          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon" />

            </div>
          </div>

          <div className="ui compact menu">
            <div className="ui simple dropdown item">
              <img src={this.props.userAvi} alt="User AVI"></img>
              <p>{this.props.displayName}</p>
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">Channel</div>
                <div className="item">Dashboard</div>
                <div className="item">Friends</div>
                <Link to="settings/profile" className="item">Settings</Link>
                <div className="item"><GoogleAuth /></div>
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
