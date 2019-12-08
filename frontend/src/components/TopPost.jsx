import React from "react";
import styled from "styled-components";
import defaultTheme from "./Theme";
const Container = styled.div`
  background-color: ${defaultTheme.bg.primary};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  justify-content: flex-start;
  overflow: hidden;
  transistion: ${defaultTheme.animations.hover}
  &:hover {
    cursor: pointer;
    box-shadow: ${defaultTheme.shadows.hover};
    transform: scale(1.05);
  }
`;

const Title = styled.h6`
  text-align: center;
  color: ${defaultTheme.textColor.secondary};
  margin: 2rem 0 0 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Num = styled.h1`
  place-self: center stretch;
  margin: 1rem;
`;
const Post = styled.img`
  width: 100%;
`;
const TopPost = ({ name, value, svg, url, id }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {/* <IconContainer>{svg}</IconContainer> */}
      <Num>{value}</Num>
      <Post src={url}></Post>
    </Container>
  );
};

export default TopPost;
