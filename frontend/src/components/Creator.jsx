import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircleImg from "./CircleImg";
import Tag from "./Tag";
import Socials from "./Socials";
import ProfileStats from "./ProfileStats";
const Container = styled.div`
  padding: 1.5rem;
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

// const ProfileStats = styled.div`
//   padding: 2rem 0 1rem 0;
//   display: flex;
//   justify-content: flex-start;
// `;

// const ProfileStat = styled.div`
//   display: flex;
// `;

const Actions = styled.div`
  width: 3rem;
`;
const Creator = ({ creators, match: { params } }) => {
  const creator = creators.find(_creator => _creator.id === params.id);
  const { creatorInsights } = creator;

  const { fullName } = creator;
  const {
    igName,
    mediaCount,
    followersCount,
    followsCount,
    profilePictureUrl,
    biography
  } = creatorInsights[0];
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
              <Tag text={"LifeStyle"} />
              <Tag text={"Travel"} />
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
            website={"www.effyzhang.com"}
          />
        </ProfileInfo>
        <Actions>Email</Actions>
      </Profile>
    </Container>
  );
};

const mapStateToProps = ({ creators }) => ({
  creators
});

export default connect(mapStateToProps)(Creator);
