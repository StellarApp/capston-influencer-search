import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;

const CircleIcon = ({ bg, svg }) => <Container bg={bg}>{svg}</Container>;
export default CircleIcon;
