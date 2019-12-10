import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { actions } from "../store";
import Button from "./buttons/PrimaryButton";

class BusinessAccount extends Component {
  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div>
        BusinessAccount page
        <Button onClick={() => history.push("/logout")}>Logout</Button>
      </div>
    );
  }
}

const mapStateToProps = ({}, { history }) => ({ history });

export default connect(mapStateToProps)(BusinessAccount);
