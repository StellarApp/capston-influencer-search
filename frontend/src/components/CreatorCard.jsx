// Package imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Local imports
import { FollowerIcon, ImpressionIcon, LocationIcon } from "./Icons";

const Image = styled.div`
  border-radius: 50%;
`;

const Container = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 10px;
  margin: auto;
  width: 500px;
  heigh: 400px;
  &:hover {
    cursor: pointer;
  }
`;

const EngagementList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Engagement = styled.div`
  flex: 1 0 calc(33% - 10px);
  margin: 5px;
  justify-content: space-around;
  align-items: flex-end;
`;

const TextBox = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  color: #828282;
`;

const CreatorCard = ({ creator }) => {
  return (
    /* need to creat Creator API request -- get & put
    // get for followers/impressons/location
    // put for description(editable) */

    // <Link to={`/creator/${creatorId}`}>
    // add ig profile pic
<<<<<<< HEAD
    <Link to={`/creators/${creator.id}`}>
      <Container>
        <h4>{creator.fullName}</h4>
        <Image src="#" alt="profile photo" />
        <TextBox>{creator.description} [This will be Description.]</TextBox>
        <EngagementList>
          <Engagement id="followers">
            <FollowerIcon />
            [ig followers]
          </Engagement>
          <Engagement id="impressions">
            <ImpressionIcon />
            [ig impressions]
          </Engagement>
          <Engagement id="location">
            <LocationIcon /> [ig location]
          </Engagement>
        </EngagementList>
        <TextBox id="interests"> [interest list] </TextBox>
      </Container>
    </Link>
=======
    <Container>
      <h4>{creator.fullName}</h4>
      <Image src="#" alt="profile photo" />
      <TextBox>{creator.description} [This will be Description.]</TextBox>
      <EngagementList>
        <Engagement id="followers">
          <FollowerIcon />
          [ig followers]
        </Engagement>
        <Engagement id="impressions">
          <ImpressionIcon />
          [ig impressions]
        </Engagement>
        <Engagement id="location">
          <LocationIcon /> [{creator.location}
        </Engagement>
      </EngagementList>
      <TextBox id="interests"> [interest list] </TextBox>
    </Container>
    //   </Link>
>>>>>>> 301b9030a349f3a804f641af1f1c8ca727efa9f1
  );
};

export default connect(null)(CreatorCard);
