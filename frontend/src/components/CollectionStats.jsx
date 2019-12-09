import React from "react";
import { connect } from "react-redux";

import MediaStats from "./MediaStats";

const CollectionStats = ({
  selectedMediaCount,
  selectedFollowersCount,
  selectedFollowsCount,
  selectedTotalComments,
  selectedTotalLikes,
  selectedEngagementRate
}) => {
  return (
    <MediaStats
      mediaCount={selectedMediaCount}
      followersCount={selectedFollowersCount}
      followsCount={selectedFollowsCount}
      totalComments={selectedTotalComments}
      totalLikes={selectedTotalLikes}
      engagementRate={selectedEngagementRate}
    />
  );
};

const mapStateToProps = ({ selected, creators }) => {
  let selectedMediaCount = 0,
    selectedFollowersCount = 0,
    selectedFollowsCount = 0,
    selectedTotalComments = 0,
    selectedTotalLikes = 0,
    selectedEngagementRate;

  selected.forEach(selectedCreator => {
    const creator = creators.find(creator => selectedCreator === creator.id);
    const {
      mediaCount,
      followersCount,
      followsCount,
      totalComments,
      totalLikes
    } = creator.creatorInsights[0];

    selectedMediaCount += mediaCount;
    selectedFollowersCount += followersCount;
    selectedFollowsCount += followsCount;
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
    selectedMediaCount,
    selectedFollowersCount,
    selectedFollowsCount,
    selectedTotalComments,
    selectedTotalLikes,
    selectedEngagementRate
  };
};

export default connect(mapStateToProps)(CollectionStats);
