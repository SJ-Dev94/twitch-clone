/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { auth, providers } from '../firebaseconfig'
import { addUserInfoToState, signIn, updateWindowSize } from '../actions/index'
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import LandingSmall from './Landing/LandingSmall/landingSmall'
import LandingIndex from './Landing/LandingIndex'
import UserSettingsPage from './user_pages/UserSettings'
import UserSignIn from './user_pages/UserSignIn'
import UserSignUp from './user_pages/UserSignUp'
import Header from './Header';
import Sidebar from './Sidebar/Sidebar.js'
import history from '../history';
import debounce from 'lodash.debounce';
import { createCategory } from './createCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.addUserInfoToState(user);
        console.log('logged in');
      } else {
        console.log('not logged in');
      }

    })
  }

  componentDidMount() {

    this.props.updateWindowSize(window.innerWidth);

    window.addEventListener(
      "resize",
      debounce(() => {
        this.props.updateWindowSize(window.innerWidth);
      }, 200)
    );
  }


  render() {
    const fullHeight = {
      height: '100vh'
    };
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <div style={fullHeight}>
              <Switch>
                <Route path="/" exact component={LandingIndex} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/:id" exact component={StreamShow} />
                <Route path="/settings/profile" exact component={UserSettingsPage} />
                <Route path="/signIn" exact component={UserSignIn} />
                <Route path="/signUp" exact component={UserSignUp} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
};
const mapStateToProps = null;
export default connect(mapStateToProps, { addUserInfoToState, signIn, updateWindowSize })(App);

