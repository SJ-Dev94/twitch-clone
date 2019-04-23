import React, { Component } from 'react';
import Message from './Message';
import { database } from '../../firebaseconfig';
import { connect } from 'react-redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.displayName,
      message: '',
      list: [],
    };

    this.messageRef = database.ref().child('messages');
    this.listenMessages();

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
          list: Object.values(message.val())
        });
        console.log(this.state.list);
      });
  }

  listMessages = () => {
    return this.state.list.map((item, index) => {

      return <Message key={index} message={item} />

    });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
          {this.listMessages()}
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


const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null,
    isSignedIn: state.auth.isSignedIn,
  }
}
export default connect(mapStateToProps)(MessageForm);