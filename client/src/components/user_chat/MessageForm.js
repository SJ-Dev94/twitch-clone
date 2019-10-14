import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import onClickOutside from "react-onclickoutside";
import Message from './Message';
import { database } from '../../firebaseconfig';
import { connect } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart'




class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.displayName,
      message: '',
      list: [],
      userAvi: this.props.userAvi,
      emojiButtonClicked: false
    }

  }


  componentDidUpdate(prevProps) {
    if (this.props.stream !== prevProps.stream) {
      this.getMessage(this.props.stream);
    }
  }


  getMessage = async (streamId) => {
    const messageRef = database.ref(`messages/${streamId}`);


    await messageRef.orderByChild('message').limitToLast(10)
      .on('value', async snapshot => {
        const result = [];
        snapshot.forEach((child) => {
          const response = Object.assign({}, child.val());
          result.push(response);
          if (!response) {
            console.log("no message")
          } else {
            this.setState({
              list: result
            })

          }
        })

      });
  }

  emojiClick = () => {
    if (this.state.emojiButtonClicked !== true) {
      this.setState({
        emojiButtonClicked: true
      })

    } else {
      this.setState({
        emojiButtonClicked: false
      })
    }
    console.log(this.state.emojiButtonClicked)
  }
  //function to add emoji's to the chat
  addEmojiToChat = (e) => {
    let symbol = e.unified.split('-')
    let result = []
    symbol.forEach(el => result.push('0x' + el))
    let emoji = String.fromCodePoint(...result)
    this.setState({
      message: this.state.message + emoji
    })
  }

  showEmojiPicker = () => {
    return <Picker onSelect={this.addEmojiToChat} />
  }

  handleChange(e) {
    this.setState({ message: e.target.value });

  }
  handleMessageSend = () => {
    this.messageRef = database.ref(`messages/${this.props.stream}`);
    let newItem;
    if (this.state.message) {
      newItem = {
        userName: this.state.userName,
        userAvi: this.props.userAvi,
        message: this.state.message,
        streamId: this.props.stream
      }
      this.messageRef.push(newItem);
      this.setState({
        message: '',
        streamId: this.props.stream
      });
      if (this.state.emojiButtonClicked) {
        this.setState({
          emojiButtonClicked: false
        })
      }
    }
  }

  changeEmojiStateFalse = () => {
    if (this.state.emojiButtonClicked) {
      this.setState({
        emojiButtonClicked: false
      })
    }
  }

  handleKeyPress = (event) => {
    if (event.key !== 'Enter') return;
    this.handleMessageSend();
  }

  //currently this does not retrieve any messages. this is your current task.


  listMessages = () => {
    return this.state.list.map((item, index) => {

      return <Message key={index} message={item} />

    });
  }

  render() {

    if (!this.props.stream) {
      return "loading....";
    }
    if (this.state.emojiButtonClicked) {
      return (
        <div className="form">
          <div className="form__message">
            {this.listMessages()}
          </div>
          <div className="form__row">
            <span>
              <span>
                <button onClick={this.emojiClick}>
                  <i class="far fa-grin"></i>
                </button>
              </span>
              <Picker onSelect={this.addEmojiToChat} />
            </span>
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
      )
    }
    return (
      <div className="form">
        <div className="form__message">
          {this.listMessages()}
        </div>
        <div className="form__row">
          <span>
            <button onClick={this.emojiClick}>
              <i class="far fa-grin"></i>
            </button>
          </span>
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
    userAvi: state && state.auth && state.auth.userInfo ? state.auth.userInfo.photoURL : null,
    stream: state && state.streams && state.streams[0] ? state.streams[0].streamId : null,
    isSignedIn: state.auth.isSignedIn,
    displayName: state.auth && state.auth.userInfo ? state.auth.userInfo.displayName : null
  }
}

export default connect(mapStateToProps)(MessageForm);