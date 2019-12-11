import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CircleImg from "./CircleImg";
import Tag from "./Tag";
import Socials from "./Socials";
import ProfileStats from "./ProfileStats";
import MediaStats from "./MediaStats";
import TopPosts from "./TopPosts";
import SecondaryButton from "./buttons/SecondaryButton"
const Container = styled.div``;

const EmailBtn = styled(SecondaryButton)`
  width: 3rem;
  margin-right: 0.75rem;
  background-color: #daedfe;
`;

const Profile = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;
const ProfileImg = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 1rem;
`;
const ProfileInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;
const ProfileHeader = styled.div`
  display: flex;
`;
const SubText = styled.h6`
  margin-top: 2px;
  color: ${props => props.theme.textColor.secondary};
`;

const Tags = styled.div`
  margin-left: 2rem;
  display: flex;
`;

const Actions = styled.div`
  width: 3rem;
`;
const Creator = ({ creators, keywords, match: { params } }) => {
  const creator = creators.find(_creator => _creator.id === params.id);
  const { creatorInsights, creatorLinks, creatorInterests } = creator;
  const { fullName } = creator;
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
  const { twitter, youtube, website } = creatorLinks.length
    ? creatorLinks[0]
    : {};
  const interests = creatorInterests.map(interest => interest.keywordId);
  const tags = keywords.filter(keyword => interests.includes(keyword.id));
  return (
    <Container>
      <Profile>
        <ProfileImg>
          <CircleImg src={profilePictureUrl}></CircleImg>
        </ProfileImg>
        <ProfileInfo>
          <ProfileHeader>
            <div>
              <h4>{igName}</h4>
              <SubText>{fullName}</SubText>
            </div>
            <Tags>
              {tags.map(tag => (
                <Tag text={tag.name} key={tag.id} />
              ))}
            </Tags>
          </ProfileHeader>
          <ProfileStats
            mediaCount={mediaCount}
            followersCount={followersCount}
            followsCount={followsCount}
          />
          <SubText>{biography}</SubText>
          <Socials
            instagram={`https://www.instagram.com/${igName}/`}
            website={website}
            twitter={twitter}
            youtube={youtube}
          />
        </ProfileInfo>
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
        {/* <Actions></Actions> */}
      </Profile>
      <MediaStats
        mediaCount={mediaCount}
        followersCount={followersCount}
        followsCount={followsCount}
        totalComments={totalComments}
        totalLikes={totalLikes}
        engagementRate={engagementRate}
      />
      <TopPosts
        mostLiked={mostLikedPost}
        mostCommented={mostCommentedPost}
        mostEngaged={mostEngagedPost}
      />
    </Container>
  );
};

const mapStateToProps = ({ creators, keywords }) => ({
  creators,
  keywords
});

export default connect(mapStateToProps)(Creator);
