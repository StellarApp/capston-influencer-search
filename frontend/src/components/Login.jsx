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
    const { fbLogin } = this.props;
    const {
      first_name,
      last_name,
      accessToken,
      email,
      id,
      picture,
      accounts,
      gender,
      location
    } = response;

    console.log("RESPONSE", accounts.data[0]);

    const ig_id = accounts.data[0].id;

    const user = {
      firstName: first_name,
      lastName: last_name,
      email,
      facebookId: id,
      imageUrl: picture.data.url,
      gender,
      location : location.name
    };
    
    //find IG_accounts
    console.log("CREATOR", user);
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
            fields="first_name,last_name,email, picture, gender, location, link, accounts{instagram_business_account}"
            //change the scope of the login
            scope="public_profile,email, user_gender, user_location, user_link, instagram_basic,instagram_manage_comments,manage_pages"
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
  fbLogin: auth =>
    //dispatch facebook auth & user data
    dispatch(actions.attemptToLogin(auth, history))
});

export default connect(null, mapDispatchToProps)(Login);
