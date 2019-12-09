// Package imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircleImg from "./CircleImg";
import defaultTheme from "./Theme";
import ProfileStats from "./ProfileStats";

// Local imports
import { actions } from "../store";
const { handleAddCollection } = actions;

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  heigh: 400px;
  &:hover {
    cursor: pointer;
    box-shadow: ${defaultTheme.shadows.hover};
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
  keywords,
  inCollection,
}) => {
  const { creatorInterests } = creator;
  let interests = "";

  if (keywords.length > 1 && creatorInterests.length > 0) {
    interests = creatorInterests.map(
      interest =>
        keywords.find(keyword => keyword.id === interest.keywordId).name
    );
  }
  const { fullName } = creator;

  return (
    <Container>
      <Link to={`/creators/${creator.id}`}>
        <h4>{fullName}</h4>
      </Link>
      {/* <Image
        src={creator.creatorInsights[0].profilePictureUrl}
        alt="profile photo"
      /> */}
      <TextBox>{creator.creatorInsights[0].biography}</TextBox>
      {/* <EngagementList>
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
      </EngagementList> */}
      <TextBox id="interests">
        {interests.length > 0 &&
          interests.map((item, idx) => <div key={idx}>{item}</div>)}
      </TextBox>
      {inCollection ? (
        "Added to your collection"
      ) : (
        <button onClick={() => handleAddCollection(businessId, creator.id)}>
          Add to Collection
        </button>
      )}
    </Container>
  );
};

const mapStateToProps = ({ auth, keywords, collections }, { creator }) => {
  return {
    businessId: auth.id,
    keywords,
    inCollection: !!(
      collections &&
      collections.find(collection => collection.creatorId === creator.id)
    )
  };
};

const mapDispatchToProps = {
  handleAddCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatorCard);
