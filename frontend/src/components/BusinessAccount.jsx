import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { actions } from "../store";
import styled from "styled-components";
import Button from "./buttons/PrimaryButton";

const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  min-width: 350px;
`;

class BusinessAccount extends Component {
  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <Container>
        Business Account page
        <ButtonContainer>
          <Button onClick={() => history.push("/logout")}>Logout</Button>
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({}, { history }) => ({ history });

export default connect(mapStateToProps)(BusinessAccount);
