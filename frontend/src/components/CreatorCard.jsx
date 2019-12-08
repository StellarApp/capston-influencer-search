// Package imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Local imports
import { FollowerIcon, ImpressionIcon, LocationIcon } from "./Icons";
import { actions } from "../store";
const { handleAddCollection } = actions;

const Image = styled.div`
  border-radius: 50%;
`;

const Container = styled.div`
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

const TextBox = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  color: #828282;
`;

const CreatorCard = ({
  creator,
  handleAddCollection,
  businessId,
  keywords
}) => {
  const { creatorInterests } = creator;
  let interests = "";

  if (keywords.length > 1 && creatorInterests.length > 0) {
    interests = creatorInterests.map(
      interest =>
        keywords.find(keyword => keyword.id === interest.keywordId).name
    );
  }

  return (
    <Container>
      <Link to={`/creators/${creator.id}`}>
        <h4>{creator.fullName}</h4>
      </Link>
      <Image
        src={creator.creatorInsights[0].profilePictureUrl}
        alt="profile photo"
      />
      <TextBox>{creator.creatorInsights[0].biography}</TextBox>
      <EngagementList>
        <Engagement id="followers">
          <FollowerIcon />
          {creator.creatorInsights[0].followersCount}
        </Engagement>
        <Engagement id="impressions">
          <ImpressionIcon />
          [ig impressions]
        </Engagement>
        <Engagement id="location">
          <LocationIcon /> {creator.location}
        </Engagement>
      </EngagementList>
      <TextBox id="interests">
        {" "}
        {interests.length > 0 && interests.map((item,idx) => <div key={idx}>{item}</div>)}{" "}
      </TextBox>
      <button onClick={() => handleAddCollection(businessId, creator.id)}>
        Add to Collection
      </button>
    </Container>
  );
};

const mapStateToProps = ({ auth, keywords }) => {
  return { businessId: auth.id, keywords };
};

const mapDispatchToProps = {
  handleAddCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatorCard);
