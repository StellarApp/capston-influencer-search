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
    const { first_name, last_name, accessToken, email, id, picture, accounts} = response;
    console.log('ig_business', accounts.data)
    //find IG_accounts
    accounts.data.map(account => {
      const{ category, category_list} = account;
      const ig_id = account.id;
      const ig_name = account.name;
      const user = {
        firstName: first_name,
        lastName: last_name,
        email,
        igUserName: ig_name,
        facebookId: id,
        instagramId: ig_id,
        imageUrl: picture.data.url
      }
      console.log('ig_business_acounts', user);
      const auth = { token: accessToken, user };
      fbLogin(auth);
    })
    // const auth = { token: accessToken, user };
    // fbLogin(auth);
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
            fields="first_name,last_name,email,picture,accounts"
            callback={facebookLogin}
            icon="fa-facebook"
            size="medium"
            //change the scope of the login
            scope="public_profile,email,instagram_basic,instagram_manage_comments"
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