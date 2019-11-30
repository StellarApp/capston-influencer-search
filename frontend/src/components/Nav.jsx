// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Local imports
import { actions } from "../store";

class Nav extends Component {
  render() {
    const { loggedIn } = this.props
    return (
      <div>
        <NavLink to="/" exact>
          Connect Creator
        </NavLink>
        {!loggedIn ? (
          <NavLink to="/login">
            Login &rarr;
          </NavLink>
        ) : (
          <NavLink to="/logout">
            Logout 
          </NavLink>
        )} 
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedIn: !!auth.token
});

export default connect(mapStateToProps)(Nav);
