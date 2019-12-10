import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { actions } from "../store";

class BusinessAccount extends Component {
  render() {
    return (
      <div>
        BusinessAccount page
        <NavLink to="/logout">Logout</NavLink>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(BusinessAccount);
