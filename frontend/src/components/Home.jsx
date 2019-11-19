// Package imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local imports
import { actions } from '../store';

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/auth/linkedin">
          <img src="./assets/images/linkedin-signin.png" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Home);
