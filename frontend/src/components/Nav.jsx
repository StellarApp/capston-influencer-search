// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Local imports
import { actions } from "../store";

const NavBar = styled.div`
  grid-area: 1/1/2/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const Left = styled.div`
  flex-grow: auto;
  display: flex;
  justify-content: flex-start;
`;

const Right = styled.div`
  flex-grow: auto;
  flex-wrap: nowrap;
  justify-content: flex-end;
  display: flex;
`;

const StyledNav = styled(NavLink)`
  color: palevioletred;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #ff5c28;
  }
`;

class Nav extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <NavBar>
        <Left>
          <StyledNav to="/" exact>
            Connect Creator
          </StyledNav>
        </Left>
        <Right>
          {loggedIn ? <StyledNav to="/creators">Creators</StyledNav> : ""}
          {loggedIn ? <StyledNav to="/collections">Collections</StyledNav> : ""}
          {loggedIn ? <StyledNav to="/account">Account</StyledNav> : ""}
          {!loggedIn ? (
            <StyledNav to="/login">Login &rarr;</StyledNav>
          ) : (
            <StyledNav to="/logout">Logout</StyledNav>
          )}
        </Right>
      </NavBar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.token
});

export default connect(mapStateToProps)(Nav);
