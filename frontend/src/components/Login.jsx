import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { actions } from '../store';

class Login extends Component {
  constructor() {
    super();
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  facebookLogin(response) {
    const { attemptFBLogin } = this.props;
    const {
      first_name,
      last_name,
      accessToken,
      email,
      id,
      accounts,
      gender,
      location
    } = response;

    const user = {
      firstName: first_name,
      lastName: last_name,
      email,
      facebookId: id,
      instagramId: accounts.data[0].instagram_business_account.id,
      gender,
      location: location.name
    };

    const auth = { token: accessToken, user };
    attemptFBLogin(auth);
  }

  render() {
    const { facebookLogin } = this;

    return (
      <div>
        <div id="businessLogin">
          <h2>For Business:</h2>
          <a href="/auth/linkedin">
            <img src="./assets/images/linkedin-signin.png" />
          </a>
        </div>
        <div id="creatorLogin">
          <h2>For Creators:</h2>
          <FacebookLogin
            appId={process.env.FB_APP_ID}
            fields="first_name,last_name,email,picture,gender,location,link,accounts{instagram_business_account}"
            scope="public_profile,email,user_gender,user_location,user_link,instagram_basic,instagram_manage_insights,manage_pages"
            callback={facebookLogin}
            icon="fa-facebook"
            size="medium"
            textButton="Sign In With Facebook"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  attemptFBLogin: auth => dispatch(actions.attemptFBLogin(auth, history))
});

export default connect(null, mapDispatchToProps)(Login);
