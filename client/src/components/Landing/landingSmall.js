import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchCategories } from './LandingHelpers/fetchCategories.js';
import { result } from '../../actions';

export default class LandingSmall extends React.Component {
  constructor(props) {
    super(props)
    this.state = { categories: fetchCategories() };
  }


  //left off trying to render this list
  renderList() {

    return Object.keys(this.state).map(category =>
      category.map(i => {
        console.log(i);
        return (< div className="item" key={category.title} >
          {console.log(this.state)}
          < i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${category.title}`} className="header">
              {category.title}
            </Link>
            <div className="description">{category.description}</div>
          </div>
        </div >
        )
      })
    );
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
        <div>{this.renderList()}</div>
      </div>
    )
  }
}

