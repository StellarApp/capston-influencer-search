// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

class Home extends Component {
  render() {
    return (
      <div>Home page
        </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Home);
