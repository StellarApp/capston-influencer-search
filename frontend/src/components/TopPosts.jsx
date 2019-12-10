import React from "react";
import styled from "styled-components";
import TopPost from "./TopPost";
import defaultTheme from "./Theme";
import { stat_comment, stat_like, stat_engagement } from "./Icon";
const Container = styled.div`
  background-color: ${defaultTheme.bg.secondary};
  padding: 2rem;
`;
const Title = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`;
const AllPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  max-width: 1440px;
`;

const TopPosts = ({ mostLiked, mostCommented, mostEngaged }) => {
  return (
    <Container>
      <Title>
        <h4>Top Posts</h4>
      </Title>
      <AllPosts>
        <TopPost
          name={"Most liked post"}
          value={mostLiked.like_count}
          url={mostLiked.media_url}
          svg={stat_like}
        />
        <TopPost
          name={"Most commented post"}
          value={mostCommented.comments_count}
          url={mostCommented.media_url}
          svg={stat_comment}
        />

        <TopPost
          name={"Most engaged post"}
          value={mostEngaged.like_count + mostEngaged.comments_count}
          url={mostEngaged.media_url}
          svg={stat_engagement}
        />
      </AllPosts>
    </Container>
  );
};

export default TopPosts;
