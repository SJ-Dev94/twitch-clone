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

    console.log(this.props.stream);

    this.listenMessages();

  }

  handleChange(e) {
    this.setState({ message: e.target.value });

  }
  handleMessageSend() {
    this.messageRef = database.ref(`messages/${this.props.stream}`);
    let newItem;
    console.log(this.props.stream);
    if (this.state.message) {
      newItem = {
        userName: this.state.userName,
        message: this.state.message,
        streamId: this.props.stream
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
    this.messageRef = database.ref(`messages/${this.props.stream}`);
    this.messageRef.limitToLast(10)
      .on('value', message => {
        if (!message.val()) {
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
  let result;
  state.streams.forEach((i) => {
    result = i.streamId;
  })
  console.log(result);
  return {
    stream: result,
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}



export default connect(mapStateToProps)(MessageForm);