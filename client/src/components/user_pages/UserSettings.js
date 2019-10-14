import React from 'react';
import { connect } from 'react-redux';
import { handleUploadProfilePictureAction } from '../../actions'
import UserSettings from './UserSettingsForm';

class UserSettingsPage extends React.Component {
  onSubmit = (formValues) => {
    this.props.handleUploadProfilePicture(formValues);
  }

  render() {
    return (
      <div>
        <UserSettings onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    userId: state.auth && state.auth.userInfo ? state.auth.userInfo.userId : null,
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStateToProps, { handleUploadProfilePictureAction })(UserSettingsPage);