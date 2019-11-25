// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

class FacebookLogin extends Component {
  componentDidMount() {
    document.addEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  initializeFacebookLogin() {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  // Check facebook login status
  checkLoginStatus() {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  // Check login status & call login api if user is not logged in
  facebookLogin(){
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      console.log("response", response);
      if (response.status === "connected") {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, { scope: "public_profile" });
      }
    });
  }

  // Handle Login Response
  facebookLoginHandler(response){
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.onLogin(true, result);
      });
    } else {
      this.props.onLogin(false);
    }
  }

  render() {
    let { children } = this.props;
    return <div onClick={this.facebookLogin}>{children}</div>;
  }
}

export default FacebookLogin;