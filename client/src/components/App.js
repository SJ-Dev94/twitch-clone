/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { auth } from '../firebaseconfig'
import { addUserInfoToState, signIn } from '../actions/index'
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import UserSettingsPage from './user_pages/UserSettings'
import UserSignIn from './user_pages/UserSignIn'
import UserSignUp from './user_pages/UserSignUp'
import Header from './Header';
import history from '../history';


class App extends React.Component {
  constructor(props) {
    super(props);


    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.addUserInfoToState(user);
      } else {
        console.log('not logged in');
      }

    })
  }

  render() {
    return (
      <div className="ui container" >
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
              <Route path="/settings/profile" exact component={UserSettingsPage} />
              <Route path="/signIn" exact component={UserSignIn} />
              <Route path="/signUp" exact component={UserSignUp} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};
const mapStateToProps = null;
export default connect(mapStateToProps, { addUserInfoToState, signIn })(App);

