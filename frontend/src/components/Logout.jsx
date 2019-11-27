import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

/* Logout */
class Logout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return null;
  }
}

const mapStateToProps = ({ auth }, { history }) => ({ auth, history });

const mapDispatchToProps = (dispatch, { history }) => ({
  logout: () => dispatch(actions.logout(history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);
