// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Local imports
import { actions } from "../store";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Link = styled.p`
  color: ${props => props.theme.textColor.primary};
  padding: 0 1rem;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

class Nav extends Component {
  render() {
    const { loggedIn } = this.props;
    if (!loggedIn) {
      return (
        <NavBar>
          <div>
            <NavLink to="/" exact>
              Connect Creator
            </NavLink>
          </div>
          <div>
            <NavLink to="/login">
              <Link>Login</Link>
            </NavLink>
          </div>
        </NavBar>
      );
    }
    return (
      <NavBar>
        <div>
          <NavLink to="/" exact>
            Connect Creator
          </NavLink>
        </div>
        <div>
          <NavLink to="/creators">
            <Link>Creators</Link>
          </NavLink>
          <NavLink to="/collections">
            <Link>Collections</Link>
          </NavLink>
          <NavLink to="/account">
            <Link>Account</Link>
          </NavLink>
        </div>
      </NavBar>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.token,
  type: auth.type
});

export default connect(mapStateToProps)(Nav);
