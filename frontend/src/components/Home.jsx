// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

<<<<<<< Updated upstream
=======
window.fbAsyncInit = function() {
  FB.init({
    appId: "507675923424391",
    cookie: true,
    xfbml: true,
    version: "v5.0"
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function(response) {
    console.log(response)
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
    console.log(response)

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

>>>>>>> Stashed changes
class Home extends Component {
  render() {
    return (
      <div>Creator Info</div>
    );
  }
}

export default connect(null)(Home);
