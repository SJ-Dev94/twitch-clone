import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart'

export default class Message

  extends Component {

  render() {
    return (
      <div className="message">

        <img src={this.props.message.userAvi}></img>
        <span className="message__author">
          {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userAvi: state && state.auth && state.auth.userInfo ? state.auth.userInfo.photoURL : null
  }
}



connect(mapStateToProps)(Message);