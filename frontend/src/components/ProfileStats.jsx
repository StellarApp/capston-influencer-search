import styled from "styled-components";
import React from "react";
const Container = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: flex-start;
`;

const ProfileStat = styled.div`
  display: flex;
`;

const ProfileStatLabel = styled.h6`
  color: ${props => props.theme.textColor.secondary};
  margin-left: 0.5rem;
  margin-right: 3rem;
`;

const ProfileStats = ({ mediaCount, followersCount, followsCount }) => {
  return (
    <Container>
      <ProfileStat>
        <h4>{mediaCount}</h4>
        <ProfileStatLabel>posts</ProfileStatLabel>
      </ProfileStat>
      <ProfileStat>
        <h4>{followersCount}</h4>
        <ProfileStatLabel>Followers</ProfileStatLabel>
      </ProfileStat>
      <ProfileStat>
        <h4>{followsCount}</h4>
        <ProfileStatLabel>Following</ProfileStatLabel>
      </ProfileStat>
    </Container>
  );
};

export default ProfileStats;
