import React, { Component } from 'react';
import Message from './Message';
import { database } from '../../firebaseconfig';
import { connect } from 'react-redux';

let result = [];

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.displayName,
      message: '',
      list: [],
    };

    this.messageRef = database.ref(`messages`);

    this.listenMessages();

  }

  handleChange(e) {
    this.setState({ message: e.target.value });

  }
  handleMessageSend() {
    console.log(this.props.stream[0]);
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
        streamId: this.props.stream[0]
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
    console.log(this.props.stream[0])
    this.messageRef.orderByChild('streamId').limitToLast(10)
      .on('value', message => {
        if (!message) {
          console.log("no message")
        } else {
          this.setState({
            list: Object.values(message.val())
          })

        }

      });
  }

  listMessages = () => {
    return this.state.list.map((item, index) => {

      return <Message key={index} message={item} />

    });
  }
  render() {
    if (!this.props.stream) {
      return "loading....";
    } return (
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
  state.streams.forEach((i) => {
    result.push(i.streamId);
  })
  return {
    stream: result,
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}



export default connect(mapStateToProps)(MessageForm);