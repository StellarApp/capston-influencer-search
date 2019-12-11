import styled from "styled-components";
const CircleImg = styled.img`
  border-radius: 50%;
  width: ${props => (props.size ? props.size : "100%")};
  height: ${props => (props.size ? props.size : "100%")};
`;
export default CircleImg;
