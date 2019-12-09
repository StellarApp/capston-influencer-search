import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";
import { actions } from "../store";
import defaultTheme from "./Theme";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #ffe1d9;
  display: grid;
  padding: 4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Header = styled.h1`
  grid-area: 1/1/2/3;
`;

const CreatorLogin = styled.div`
  grid-area: 3/1/4/2;
  align-self: end;
`;

const BusinessLogin = styled.div`
  grid-area: 3/2/4/3;
  align-self: end;
`;

const Label = styled.h4`
  margin: 1rem 0;
  color: ${defaultTheme.textColor.primary};
`;

const LinkedinButton = styled.a`
  display: block;
  vertical-align: center;
  padding: 22px;
  background-color: #1f2144;
  align-self: end;
  font-family: TitlingGothicFB Normal;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  border: none;
  color: #ffffff;
  vertical-align: center;
  overflow-hidden;
`;

const BgImg = styled.img`
  heigth: 100%;
  grid-area: 1/3/4/5;
`;
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
      <Container>
        <Header>
          A platform for creators & businesses start and stay connected.
        </Header>
        <CreatorLogin id="creatorLogin">
          <Label>For Creators</Label>
          <FacebookLogin
            appId={process.env.FB_APP_ID}
            fields="first_name,last_name,email,picture,gender,location,link,accounts{instagram_business_account}"
            scope="public_profile,email,user_gender,user_location,user_link,instagram_basic,instagram_manage_insights,manage_pages"
            callback={facebookLogin}
            // icon="fa-facebook"
            height={"4rem"}
            size="medium"
            cssClass="facebook-button"
            textButton="Connect with Facebook"
          />
        </CreatorLogin>
        <BusinessLogin id="businessLogin">
          <Label>For Business</Label>
          <LinkedinButton href="/auth/linkedin">
            Connect with Linkedin
          </LinkedinButton>
        </BusinessLogin>
        <BgImg src={"../assets/images/shape.svg"} />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  attemptFBLogin: auth => dispatch(actions.attemptFBLogin(auth, history))
});

export default connect(null, mapDispatchToProps)(Login);
