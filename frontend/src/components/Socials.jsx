import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import CircleIcon from "./CircleIcon";
import {
  social_youtube,
  social_twitter,
  social_instagram,
  social_web
} from "./Icon";

const Container = styled.div`
  width: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  height: 2rem;
  padding: 2rem 0;
`;

const Socials = ({ instagram, youtube, twitter, website }) => {
  return (
    <Container>
      {instagram && (
        <Link to={instagram}>
          <CircleIcon bg="#FF316B" svg={social_instagram} />
        </Link>
      )}
      {youtube && (
        <Link to={youtube}>
          <CircleIcon bg="#c4302b" svg={social_youtube} />
        </Link>
      )}
      {twitter && (
        <Link to={twitter}>
          <CircleIcon bg="#00acee" svg={social_twitter} />
        </Link>
      )}
      {website && (
        <Link to={website}>
          <CircleIcon bg="#6CD4C4" svg={social_web} />
        </Link>
      )}
    </Container>
  );
};
export default Socials;
