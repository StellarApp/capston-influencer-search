// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Local imports
import { actions } from "../store";

const Container = styled.div`
  grid-area: 2 / 1 / 4 / 4;
  position: absolute;
  background: #ffffff;
`;

class Home extends Component {
  render() {
    return <Container>Home page</Container>;
  }
}

export default connect(null)(Home);
