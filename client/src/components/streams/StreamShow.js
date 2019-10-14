import React from "react";
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import MessageForm from '../user_chat/MessageForm';
import StreamHeader from './StreamShowComponents/StreamHeader';

class StreamShow extends
  React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <StreamHeader />
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
        <h1>{title}</h1>
        <h5>          {description}
        </h5>

        <MessageForm />

      </div>

    )
  }
}


const mapStateToProps = (state, ownProps) => {

  const stream = state.streams[0];
  if (stream) {
    return { stream }
  } else {
    return { stream: {} }
  }

}


export default connect(mapStateToProps, { fetchStream })(StreamShow);