import styled from "styled-components";
import React from "react";
import defaultTheme from "../Theme";

const Button = styled.button`
  margin: 2rem 1rem;
  border-radius: 2rem;
  padding: 1rem;
  display: block;
  min-width: 240px;
  vertical-align: center;
  background-color: ${defaultTheme.accent.orange};
  color: #ffffff;
  font-family: TitlingGothicFB Normal;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  transition: ${defaultTheme.animations.hover};
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export default Button;
