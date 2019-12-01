// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";

// Local imports
import { actions } from "../store";

class Login extends Component {
  constructor() {
    super();
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  facebookLogin(response) {
    console.log("fb response", response);
    const { fbLogin } = this.props;
    const { first_name, last_name, accessToken, email, id, picture, gender, location } = response;
    const user = {
      firstName: first_name,
      lastName: last_name,
      email,
      facebookId: id,
      imageUrl: picture.data.url,
      gender,
      location
    };

    const auth = { token: accessToken, user };
    fbLogin(auth);
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
            autoLoad={true}
            fields="first_name,last_name,email,picture, gender, location, link"
            callback={facebookLogin}
            icon="fa-facebook"
            size="medium"
            scope="public_profile, email, user_gender, user_location, user_link"
            textButton="Sign In With Facebook"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  fbLogin: auth =>
    //dispatch facebook auth & user data
    dispatch(actions.attemptToLogin(auth, history))
});

export default connect(null, mapDispatchToProps)(Login);
