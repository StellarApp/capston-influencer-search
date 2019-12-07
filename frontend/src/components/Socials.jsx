import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import CircleIcon from "./CircleIcon";

const Container = styled.div`
  width: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  height: 2rem;
  padding: 2rem 0;
`;

const Socials = ({ instagram, youtube, twitter, website }) => {
  console.log("SOCIALS", instagram, website);
  return (
    <Container>
      {instagram && (
        <Link to={instagram}>
          <CircleIcon
            color="#FF316B"
            src="./assets/images/icon/social_instagram.svg"
          />
        </Link>
      )}

      {youtube && (
        <Link to={youtube}>
          <CircleIcon
            color="#c4302b"
            src="./assets/images/icon/social_youtube.svg"
          />
        </Link>
      )}

      {twitter && (
        <Link to={twitter}>
          <CircleIcon
            color="#00acee"
            src="./assets/images/icon/social_twitter.svg"
          />
        </Link>
      )}

      {website && (
        <Link to={website}>
          <CircleIcon
            color="#6CD4C4"
            src="./assets/images/icon/social_web.svg"
          />
        </Link>
      )}
    </Container>
  );
};
export default Socials;
