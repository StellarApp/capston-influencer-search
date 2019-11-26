// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Local imports
import { actions } from "../store";

class Nav extends Component {
  render() {
    const {loggedIn} = this.props
    return (
      <div>
        <NavLink to="/" exact>
          Home
        </NavLink>
        {/* {!loggedIn ? ( */}
          <NavLink to="/login">
            Login
          </NavLink>
        {/* ) : (
          ""
        )} */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: !!auth };
};

export default connect(mapStateToProps)(Nav);
