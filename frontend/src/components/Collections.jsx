// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";

class Collections extends Component {
  render() {
    const 
    return (
      <div>Collections page
        <ul>

        </ul>
        </div>
    );
  }
}

const mapStateToProps = ({Collections}) => ({Collections});

export default connect(mapStateToProps)(Collections);