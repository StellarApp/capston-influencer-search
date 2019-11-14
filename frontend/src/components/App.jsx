// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// Local imports
import { actions } from '../store';

// Components
import Home from './Home';
import Nav from './Nav';

class _App extends Component {
  render() {
    return (
        <HashRouter>
          <Nav />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
    );
  }
}

const mapStateToProps = ({}) => ({});


const App = connect(
  mapStateToProps,
)(_App);

export default App;
