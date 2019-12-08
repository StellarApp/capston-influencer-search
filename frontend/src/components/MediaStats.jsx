import React from "react";
import styled from "styled-components";
import defaultTheme from "./Theme";
import MediaStat from "./MediaStat";
import {
  stat_post,
  stat_comment,
  stat_like,
  stat_followers,
  stat_engagement,
  stat_following
} from "./Icon";
const Container = styled.div`
  background-color: ${defaultTheme.bg.secondary};
  padding: 2rem;
`;
const Title = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`;
const AllStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  max-width: 1440px;
`;

const MediaStats = ({
  mediaCount,
  followersCount,
  followsCount,
  totalComments,
  totalLikes,
  engagementRate
}) => {
  console.log("MEDIA STATS", mediaCount, followersCount, followsCount);
  return (
    <Container>
      <Title>
        <h4>Instagram Stats Overview</h4>
      </Title>
      <AllStats>
        <MediaStat
          name={"Media Posts"}
          value={mediaCount}
          trend={`4% less post than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Followers"}
          value={followersCount}
          trend={`20% followers growth`}
          bg={"#DAEDFE"}
          svg={stat_followers}
        />
        <MediaStat
          name={"Followings"}
          value={followsCount}
          trend={`11% following growth`}
          bg={"#FEF5D7"}
          svg={stat_following}
        />
        <MediaStat
          name={"Total likes"}
          value={totalLikes}
          trend={`-8% less likes`}
          bg={"#FDDFDF"}
          svg={stat_like}
        />
        <MediaStat
          name={"Total comments"}
          value={totalComments}
          trend={`5% more comments than usual`}
          bg={"#FEF5D7"}
          svg={stat_comment}
        />
        <MediaStat
          name={"Engagement rate"}
          value={Math.round(Number(engagementRate) * 100) / 100 + "%"}
          trend={`0.5 increase`}
          bg={"#EDEAFF"}
          svg={stat_engagement}
        />
      </AllStats>
    </Container>
  );
};

export default MediaStats;
