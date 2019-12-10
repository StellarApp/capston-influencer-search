import styled from "styled-components";
import defaultTheme from "../Theme";

const SecondaryButton = styled.button`
  margin: 0 1rem;
  border-radius: 2rem;
  padding: 1rem;
  display: block;
  vertical-align: center;
  background-color: #fff;
  color: ${defaultTheme.accent.orange};
  font-family: ${defaultTheme.fonts.heading};
  border-radius: 1px solid ${defaultTheme.accent.orange};
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  transition: ${defaultTheme.animations.hover};
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export default SecondaryButton;
