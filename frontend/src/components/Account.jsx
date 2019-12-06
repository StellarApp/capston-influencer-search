import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../store';

class Account extends Component {
  render() {
    return <div>Account page</div>;
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Account);
