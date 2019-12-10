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
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 480px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 3rem auto;
  &:hover {
    cursor: pointer;
    box-shadow: ${defaultTheme.shadows.hover};
  }
`;

const ProfileHeader = styled.div`
  grid-area: 1/1/2/3;
`;
const SubText = styled.h6`
  margin-top: 2px;
  color: ${props => props.theme.textColor.secondary};
`;
const ProfileImg = styled(CircleImg)`
  grid-area: 1/3/2/4;
  width: 4rem;
  height: 4rem;
  justify-self: end;
`;

const Stats = styled(ProfileStats)`
  grid-area: 2/1/3/4;
`;

const CreatorCard = ({
  creator,
  handleAddCollection,
  businessId,
  keywords,
  inCollection
}) => {
  const { fullName, creatorInterests, creatorInsights } = creator;
  const {
    igName,
    mediaCount,
    followersCount,
    followsCount,
    profilePictureUrl,
    biography,
    totalComments,
    totalLikes,
    engagementRate,
    mostCommentedPost,
    mostEngagedPost,
    mostLikedPost
  } = creatorInsights[0];

  // if (keywords.length > 1 && creatorInterests.length > 0) {
  //   interests = creatorInterests.map(
  //     interest =>
  //       keywords.find(keyword => keyword.id === interest.keywordId).name
  //   );
  // }
  return (
    <Container>
      <ProfileHeader>
        <h4>
          <Link to={`/creators/${creator.id}`}>{fullName}</Link>
        </h4>
        <SubText>{fullName}</SubText>
        <p>{biography}</p>
      </ProfileHeader>
      <ProfileImg src={profilePictureUrl} alt="profile photo" />
      <Stats
        mediaCount={mediaCount}
        followersCount={followersCount}
        followsCount={followsCount}
      />
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
