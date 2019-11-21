// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

// *** issues *** environment variables are undefined
// import dotenv from 'dotenv'
// dotenv.config()

window.fbAsyncInit = function() {
  FB.init({
    appId: process.env.FB_APP_ID, // environment variables are undefined
    cookie: true,
    xfbml: true,
    version: process.env.FB_APP_VERSION // environment variables are undefined
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function(response) {
    console.log(response); // undefined. It could be http localhost, not https
    statusChangeCallback(response);
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function statusChangeCallback(response) {
  if (response.status === "connected") {
    console.log("Logged in");
  } else {
    console.log("Not authenticated");
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/auth/linkedin">
          <img src="./assets/images/linkedin-signin.png" />
        </a>
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-scope="public_profile,email"
          data-button-type="login_with"
          // data-auto-logout-link="/user/logout" //need to create a path
          data-use-continue-as="false"
        ></div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Home);
