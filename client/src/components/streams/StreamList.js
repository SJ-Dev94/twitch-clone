import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions';
import { result } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.uid === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`streams/edit/${stream.title}`}>Edit</Link>
          <Link to={`/streams/delete/${stream.title}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderList() {

    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.streamId}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.title}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    currentUserId: state.auth && state.auth.userInfo ? state.auth.userInfo.uid : null,
    isSignedIn: state.auth.isSignedIn,
  }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);