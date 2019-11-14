// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// Local imports
import { actions } from '../store';

class _Home extends Component {
  render() {
      <div> Home </div>
  }
}

const mapStateToProps = ({}) => ({});

const Home = connect(
  mapStateToProps,
)(_Home);

export default Home;
