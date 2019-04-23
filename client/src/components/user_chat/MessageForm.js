import React, { Component } from 'react';
import Message from './Message';
import { database } from '../../firebaseconfig';

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      message: '',
      list: [],
    };
    this.messageRef = database.ref().child('messages');
    this.listenMessages();
  }
  componentWillReceiveProps(props) {
    if (props.user) {
      this.setState({ 'userName': props.user.displayName });
    }
  }
  handleChange(e) {
    this.setState({ message: e.target.value });
  }
  handleMessageSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleMessageSend();
  }
  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        this.setState({
          list: Object.values(message.val()),
        });
      });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
          {this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
        </div>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className="form__button"
            onClick={this.handleMessageSend.bind(this)}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}
