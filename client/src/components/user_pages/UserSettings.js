import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class UserSettings extends React.Component {

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <div>
          <h3>Profile Picture</h3>
          <button>Update</button>
        </div>
        <div>
          <h3>Profile Banner</h3>
          <button>Update</button>
        </div>
        <div>
          <h3>Profile Settings</h3>
          <button>Update</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[0] }
}
export default connect(
  null,
  { createStream }
)(UserSettings);