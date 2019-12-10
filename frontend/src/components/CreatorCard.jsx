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
  grid-template-rows: 2rem 6rem auto;
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
  height: 2rem;
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
const Description = styled.div`
  grid-area: 2/2/3/4;
  overflow: hidden;
`;
const Stats = styled.div`
  grid-area: 3/1/4/4;
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
  width: 3rem;
  background-color: #ffe9e6;
`;

const EmailBtn = styled(SecondaryButton)`
  width: 3rem;
  margin-right: 0.75rem;
  background-color: #daedfe;
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
      </ProfileHeader>
      <Description>
        <p>{biography}</p>
      </Description>
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
              stroke="#2F80ED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6L12 13L2 6"
              stroke="#2F80ED"
              strokeWidth="2"
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#FF5C28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="#FF5C28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#FF5C28"
                strokeWidth="2"
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
