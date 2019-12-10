// Package imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircleImg from "./CircleImg";
import defaultTheme from "./Theme";
import ProfileStat from "./ProfileStat";
import SecondaryButton from "./buttons/SecondaryButton";

// Local imports
import { actions } from "../store";
const { handleAddCollection } = actions;

const Container = styled.div`
  display: grid;
  margin: 1rem;
  grid-template-columns: 3rem 1fr 1fr;
  grid-gap: 1rem;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  align-items: start;
  padding: 2rem;
  width: 480px;
  &:hover {
    cursor: pointer;
    box-shadow: ${defaultTheme.shadows.hover};
  }
`;

const ProfileHeader = styled.div`
  grid-area: 1/2/2/3;
`;
const SubText = styled.h6`
  margin-top: 2px;
  color: ${props => props.theme.textColor.secondary};
`;
const ProfileImg = styled(CircleImg)`
  grid-area: 1/1/2/2;
  width: 4rem;
  height: 4rem;
  justify-self: end;
`;

const Stats = styled.div`
  grid-area: 2/1/3/4;
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 3/4;
  grid-row: 1/2;
`;

const AddBtn = styled(SecondaryButton)`
  width: 4rem;
  background-color: #ffe9e6;
`;

const EmailBtn = styled(SecondaryButton)`
  width: 4rem;
  margin-right: 1rem;
  background-color: #e6deef;
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
      <Stats>
        <ProfileStat name={"Likes"} value={totalLikes}></ProfileStat>
        <ProfileStat name={"Followers"} value={followsCount}></ProfileStat>
        <ProfileStat
          name={"Engage Rate"}
          value={Math.round(Number(engagementRate) * 100) / 100 + "%"}
        ></ProfileStat>
      </Stats>
      <Actions>
        <EmailBtn>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33333 5.33334H26.6667C28.1333 5.33334 29.3333 6.53334 29.3333 8.00001V24C29.3333 25.4667 28.1333 26.6667 26.6667 26.6667H5.33333C3.86666 26.6667 2.66666 25.4667 2.66666 24V8.00001C2.66666 6.53334 3.86666 5.33334 5.33333 5.33334Z"
              stroke="#62319E"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.3333 8L16 17.3333L2.66666 8"
              stroke="#62319E"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </EmailBtn>
        {inCollection ? (
          "Added to your collection"
        ) : (
          <AddBtn onClick={() => handleAddCollection(businessId, creator.id)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.6362 2.66666 2.66666 8.63619 2.66666 16C2.66666 23.3638 8.6362 29.3333 16 29.3333Z"
                stroke="#FF5C28"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 10.6667V21.3333"
                stroke="#FF5C28"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 16H21.3333"
                stroke="#FF5C28"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AddBtn>
        )}
      </Actions>
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
