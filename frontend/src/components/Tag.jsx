import styled from "styled-components";
import React from "react";
import defaultTheme from "./Theme";

const Container = styled.div`
  border-radius: 2rem;
  padding: 0.75rem;
  margin-right: 0.5rem;
  display: block;
  vertical-align: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : defaultTheme.accent.pink};
  border: 1px solid
    ${props =>
      props.borderColor ? props.borderColor : defaultTheme.accent.pink};
  color: ${props =>
    props.textColor ? props.textColor : defaultTheme.accent.orange};
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;
const Tag = ({ bgColor, textColor, borderColor, text }) => (
  <Container bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
    <h6>{text}</h6>
  </Container>
);
export default Tag;
