// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

window.fbAsyncInit = function() {
  FB.init({
    appId: "507675923424391",
    cookie: true,
    xfbml: true,
    version: "v5.0"
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function(response) {
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
  if (response.authResponse) {
    const FB_accessToken =  response.authResponse.accessToken;

    //requet facebook user's data
    FB.api(`/{response.userID}`, function(userInfo) {
      if(userInfo && !userInfo.error){
        //Save UserInfo
        console.log(userInfo)
        // IG Authentication
      }
    });
   } else {
    console.log('User cancelled login or did not fully authorize.');
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
