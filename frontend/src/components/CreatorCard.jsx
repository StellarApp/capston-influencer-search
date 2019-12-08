// Package imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircleImg from "./CircleImg";
import defaultTheme from "./Theme";
import ProfileStats from "./ProfileStats";

// Local imports
import { actions } from "../store";
const { handleAddCollection } = actions;

const Container = styled.div`
  box-shadow: ${defaultTheme.shadows.default};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  heigh: 400px;
  &:hover {
    cursor: pointer;
    box-shadow: ${defaultTheme.shadows.hover};
  }
`;

const CreatorCard = ({ creator, handleAddCollection, businessId }) => {
  const { creatorInsights, creatorLinks, creatorInterests } = creator;
  const {
    igName,
    mediaCount,
    followersCount,
    followsCount,
    profilePictureUrl,
    biography,
    totalComments,
    totalLikes,
    engagementRate
  } = creatorInsights[0];
  const { fullName } = creator;
  return (
    <Container>
      <Link to={`/creators/${creator.id}`}>
        <h4>{fullName}</h4>
      </Link>
      <CircleImg src={profilePictureUrl}></CircleImg>
      <TextBox>{biography}</TextBox>

      <TextBox id="interests"> [interest list] </TextBox>
      <button onClick={() => handleAddCollection(businessId, creator.id)}>
        Add to Collection
      </button>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({ businessId: auth.id });

const mapDispatchToProps = {
  handleAddCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatorCard);
