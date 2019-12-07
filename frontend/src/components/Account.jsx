import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { actions } from "../store";

class Account extends Component {
  render() {
    return (
      <div>
        Account page
        <NavLink to="/logout">Logout</NavLink>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Account);
