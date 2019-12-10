import styled from "styled-components";
import React from "react";
// import defaultTheme from "../Theme";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
`;

const Label = styled.h6`
  color: ${props => props.theme.textColor.secondary};
  margin-top: 4px;
  margin-left: 8px;
`;

const ProfileStat = ({ name, value }) => {
  return (
    <Container>
      <h4>{value}</h4>
      <Label>{name}</Label>
    </Container>
  );
};

export default ProfileStat;
