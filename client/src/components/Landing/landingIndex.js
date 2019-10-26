import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import LandingLarge from './LandingLarge/LandingLarge.js';
import LandingSmall from './LandingSmall/landingSmall.js';
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions';
import { result } from '../../actions';

class LandingIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: undefined }
  }

  renderIndex = () => {
    if (this.props.windowSize > 900) {
      console.log('large screen')
      return <LandingLarge />;
    } else {
      console.log('small screen')
      return <LandingSmall />
    }
  }

  render() {
    return (
      <div>
        {this.renderIndex()}
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}

export default connect(mapStateToProps)(LandingIndex);