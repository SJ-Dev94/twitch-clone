import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserSignInModal from '../user_pages/UserSignInModal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount() {

  }


  render() {
    return (
      <UserSignInModal
        title="Sign In"
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);