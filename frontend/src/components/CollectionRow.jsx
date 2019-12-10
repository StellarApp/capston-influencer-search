import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
const { handleDeleteCollection, toggleSelected } = actions;
import styled from "styled-components";
import defaultTheme from "./Theme";
import CircleImg from "./CircleImg";
import SecondaryButton from "./buttons/SecondaryButton";
import Checkbox from "@material-ui/core/Checkbox";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4rem 1fr 2fr 1fr 5rem;
  border-bottom: 1px solid #bdbdbd;
  height: 6rem;
  overflow-y: hidden;
  align-items: center;
  background-color: ${defaultTheme.bg.primary};
`;
const Action = styled.div`
  padding: 0 1rem;
`;
const Name = styled.div`
  minwidth: 120px;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Biography = styled.p`
  flex-grow: 2fr;
  maxwidth: 400px;
  overflow: hidden;
`;
const ProfileImg = styled(CircleImg)`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

const DeleteBtn = styled(SecondaryButton)`
  width: 3rem;
  background-color: #ffe9e6;
`;

const Location = styled.p`
  flex-grow: 1fr;
`;
const SubText = styled.h6`
  color: ${props => props.theme.textColor.secondary};
`;
class CollectionRow extends Component {
  render() {
    const {
      creator,
      selected,
      handleDeleteCollection,
      toggleSelected,
      collection
    } = this.props;

    return (
      <Container>
        <Action>
          <Checkbox
            key={creator.id}
            checked={selected.includes(creator.id)}
            onChange={() => toggleSelected(creator.id)}
          />
        </Action>
        <Name>
          <ProfileImg
            src={creator.creatorInsights[0].profilePictureUrl}
            alt="profile photo"
          />
          <h4>{creator.creatorInsights[0].igName}</h4>
        </Name>
        <Biography>{creator.creatorInsights[0].biography}</Biography>
        <Location>{creator.location}</Location>
        <Action>
          <DeleteBtn onClick={() => handleDeleteCollection(collection.id)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#FF5C28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#FF5C28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DeleteBtn>
        </Action>
      </Container>
    );
  }
}

const mapStateToProps = ({ creators, selected }, { collection }) => ({
  creator: creators.find(creator => creator.id === collection.creatorId),
  selected
});

const mapDispatchToProps = {
  handleDeleteCollection,
  toggleSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
