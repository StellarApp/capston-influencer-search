// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";
import FacebookLogin from "react-facebook-login";

class SignUp extends Component {
  facebookLogin(response) {
    console.log(response);

    let { name, accessToken, email, userId } = response;
    const fullName = name.split(" ");
    const user = {
      firstName: fullName[0],
      lastName: fullName[name.length - 1],
      email,
      facebookId: userId
    };

    this.props.attemptToLogin(accessToken, user);
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
            appId="507675923424391"
            fields="name,email,picture"
            autoLoad={true}
            callback={facebookLogin}
            icon="fa-facebook"
            size="medium"
            scope="public_profile,user_friends"
            textButton="Sign In With Facebook"
            redirectUri="/"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  attemptToLogin: (accessToken, user) => {
    //dispatch facebook auth & user data
    dispatch(actions.attemptToLogin(accessToken, user));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);

// * This was replaced by react-facebook-login package
// using facebook sdk but FB displayed as undefined
// will use it later if the issues are resolved
// *

// window.fbAsyncInit = function() {
//   FB.init({
//     appId: "507675923424391",
//     cookie: true,
//     xfbml: true,
//     version: "v5.0"
//   });

//   const fb_init = new Event("FacebookObject");
//   document.dispatchEvent(fb_init);
// };

// (function(d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

// class FacebookLogin extends Component {
//   componentDidMount() {
//     document.addEventListener("FacebookObject", this.initializeFacebookLogin);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("FacebookObject", this.initializeFacebookLogin);
//   }

//   // Initialize facebook object & check login status
//   initializeFacebookLogin(){
//     this.FB = window.FB;
//     this.checkLoginStatus();
//   };

//   checkLoginStatus(){
//     this.FB.getLoginStatus(this.facebookLoginHandler);
//   };

//   facebookLogin(){
//     // if (!this.FB) return;

//     this.FB.getLoginStatus(response => {
//       if (response.status === "connected") {
//         this.facebookLoginHandler(response);
//       } else {
//         this.FB.login(this.facebookLoginHandler, { scope: "public_profile" });
//       }
//     });
//   };

//   facebookLoginHandler(response){
//       this.FB.api("/me", userData => {
//         let result = {
//           ...response,
//           user: userData
//         };
//         this.props.onLogin(true, result);
//       });
//   };

//   render() {
//     return <div onClick={this.facebookLogin}>{this.props}</div>;
//   }
// }

// class SignUp extends Component {

// render() {
//     return (
//       <div>
//         <div id="businessLogin">
//           <h2>For Business:</h2>
//           <a href="/auth/linkedin">
//             <img src="./assets/images/linkedin-signin.png" />
//           </a>
//         </div>
//         <div id="creatorLogin">
//           <h2>For Creators:</h2>
//           <FacebookLogin onLogin={this.onFacebookLogin}>
//                 <button>Facebook</button>
//               </FacebookLogin>
//           {/* <div
//             className="fb-login-button"
//             data-width=""
//             data-size="large"
//             data-scope="public_profile,email"
//             data-button-type="login_with"
//             //   data-auto-logout-link="/user/logout" //need to create a path
//             data-use-continue-as="false"
//             onClick={this.facebookLogin}
//           >
//           </div> */}
//         </div>
//       </div>
//     );
//   }
// }
