import styled from "styled-components";
import defaultTheme from "../Theme";

const SecondaryButton = styled.button`
  padding: 0.75rem;
  display: block;
  border-radius: 1.5rem;
  height: 3rem;
  vertical-align: center;
  background-color: #fff;
  color: ${defaultTheme.accent.orange};
  font-family: ${defaultTheme.fonts.heading};
  font-weight: 400;
  text-align: center;
  background-color: ${defaultTheme.accent.pink};
  font-size: 16px;
  border: none;
  transition: ${defaultTheme.animations.hover};
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export default SecondaryButton;
