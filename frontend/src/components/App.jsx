// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// Local imports
import { actions } from '../store';

// Components
import Home from './Home';
import Nav from './Nav';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
