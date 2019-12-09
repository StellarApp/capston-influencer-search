import styled from "styled-components";
import React from "react";
import defaultTheme from "../Theme";
const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
`;

const StyledInput = styled.input`
  grid-area: 1/1/2/3;
  border-radius: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  display: block;
  min-width: 320px;
  vertical-align: center;
  background-color: #ffffff;
  color: ${defaultTheme.textColor.primary};
  border: 1px solid ${defaultTheme.accent.orange};
  padding-left: 3.5rem;
  font-family: "work sans";
  font-weight: 400;
  font-size: 16px;
  transition: ${defaultTheme.animations.hover};
  &:focus {
    background-color: ${defaultTheme.bg.secondary};
  }
`;

const Icon = styled.i`
  grid-area: 1/1/2/2;
  display: flex;
  margin: 1.5rem 0.5rem;
  border-radius: 1.25rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 8px;

  background-color: ${defaultTheme.accent.orange};
  position: abusolute;
`;
const IconInput = ({ svg, name, placeholder }) => {
  return (
    <Container>
      <StyledInput name={name} placeholder={placeholder}></StyledInput>
      <Icon>{svg}</Icon>
    </Container>
  );
};
export default IconInput;
