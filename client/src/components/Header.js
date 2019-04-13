import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth'

//add js to change ui based on user login
class Header extends React.Component {

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <i class="fab fa-twitch"></i>
        </Link>
        <Link to="/" className="item">
          Discover
      </Link>
        <Link to="/" className="item">
          Following
      </Link>
        <Link to="/" className="item">
          Browse
      </Link>
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

          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <img src={this.props.userAvi} alt="User AVI"></img>
              <p>{this.props.displayName}</p>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">Channel</div>
                <div class="item">Dashboard</div>
                <div class="item">Friends</div>
                <Link to="settings/profile" className="item">Settings</Link>
                <div class="item"><GoogleAuth /></div>
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
    userAvi: state.auth && state.auth.userInfo ? state.auth.userInfo.userAvi : null,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}

export default connect(mapStateToProps)(Header);
