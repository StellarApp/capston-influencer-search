// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// Local imports
import { actions } from '../store';


class _Nav extends Component {
  render() {
    return (
          <NavLink to="/" exact> Home </NavLink>
      );
  }
}

const mapStateToProps = ({}) => ({});


const Nav = connect(
  mapStateToProps,
)(_Nav);

export default Nav;
