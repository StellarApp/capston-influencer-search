import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Creator = ({ creators, match: { params } }) => {
  if (!creators) {
    return <h1>No Creator Found</h1>;
  }
  const creator = creators.find(_creator => _creator.id === params.id);
  const { creatorInsights } = creator;

  const { fullName } = creator;
  const {
    creatorId,
    igName,
    mediaCount,
    profilePictureUrl,
    biography
  } = creatorInsights[0];
  console.log("CREATOR", creatorInsights[0]);
  return (
    <div>
      <img src={profilePictureUrl}></img>
      <h1>{igName}</h1>
      <p>{biography}</p>
      <p>{mediaCount}</p>
      <a href={`https://www.instagram.com/${igName}/`}>Instagram Link</a>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

const mapStateToProps = ({ creators }) => ({
  creators
});

export default connect(mapStateToProps)(Creator);
