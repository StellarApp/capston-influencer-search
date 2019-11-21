// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Local imports
import { actions } from "../store";

class Nav extends Component {
  render() {
    return (
      <NavLink to="/" exact>
        Home
      </NavLink>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Nav);
