// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Local imports
import { actions } from "../store";

class Home extends Component {
  render() {
    return <div>Home page</div>;
  }
}

export default connect(null)(Home);
