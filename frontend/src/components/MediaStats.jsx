import React from "react";
import styled from "styled-components";
import defaultTheme from "./Theme";
import MediaStat from "./MediaStat";
import { stat_post, stat_comment, stat_like } from "./Icon";
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
          trend={`less post than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Followers"}
          value={followersCount}
          trend={`less follwers than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Followings"}
          value={followsCount}
          trend={`less follwers than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Total likes"}
          value={totalLikes}
          trend={`less post than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Total comments"}
          value={totalComments}
          trend={`less follwers than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
        <MediaStat
          name={"Engagement rate"}
          value={Math.round(Number(engagementRate) * 100) / 100}
          trend={`less follwers than usual`}
          bg={defaultTheme.accent.pink}
          svg={stat_post}
        />
      </AllStats>
    </Container>
  );
};

export default MediaStats;
