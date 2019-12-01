// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

class Home extends Component {
  render() {
    return (
      <div>Creator Info</div>
    );
  }
}

export default connect(null)(Home);
