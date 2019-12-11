import React from "react";
import { connect } from "react-redux";
import MediaStat from "./MediaStat";
import styled from "styled-components";
import {
  stat_comment,
  stat_like,
  stat_followers,
  stat_engagement
} from "./Icon";
const AllStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 4rem;
`;
const CollectionStats = ({
  selectedMediaCount,
  selectedFollowersCount,
  selectedTotalComments,
  selectedTotalLikes,
  selectedEngagementRate
}) => {
  return (
    <AllStats>
      <MediaStat
        name={"Followers"}
        value={selectedFollowersCount}
        bg={"#DAEDFE"}
        svg={stat_followers}
      />
      <MediaStat
        name={"Total likes"}
        value={selectedTotalLikes}
        bg={"#FDDFDF"}
        svg={stat_like}
      />
      <MediaStat
        name={"Total comments"}
        value={selectedTotalComments}
        bg={"#FEF5D7"}
        svg={stat_comment}
      />
      <MediaStat
        name={"Engagement rate"}
        value={Math.round(Number(selectedEngagementRate) * 100) / 100 + "%"}
        bg={"#EDEAFF"}
        svg={stat_engagement}
      />
    </AllStats>
  );
};

const mapStateToProps = ({ selected, creators }) => {
  let selectedFollowersCount = 0,
    selectedTotalComments = 0,
    selectedTotalLikes = 0,
    selectedMediaCount = 0,
    selectedEngagementRate;

  selected.forEach(selectedCreator => {
    const creator = creators.find(creator => selectedCreator === creator.id);
    const { followersCount, totalComments, mediaCount, totalLikes } = creator
      ? creator.creatorInsights[0]
      : {};
    selectedMediaCount += mediaCount;
    selectedFollowersCount += followersCount;
    selectedTotalComments += totalComments;
    selectedTotalLikes += totalLikes;
  });

  if (selected.length > 0) {
    selectedEngagementRate =
      ((selectedTotalLikes + selectedTotalComments) /
        (selectedMediaCount * selectedFollowersCount)) *
      100;
  }

  return {
    selectedFollowersCount,
    selectedTotalComments,
    selectedTotalLikes,
    selectedEngagementRate
  };
  f;
};

export default connect(mapStateToProps)(CollectionStats);
