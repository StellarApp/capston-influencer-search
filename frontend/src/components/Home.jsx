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
        <div id="fb-root">
          <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="/user/logout" data-use-continue-as="false"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Home);
