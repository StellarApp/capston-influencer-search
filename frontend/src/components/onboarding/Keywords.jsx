import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Tag from "../Tag";

import { actions } from "../../store";
import defaultTheme from "../Theme";
const { saveCreatorInterests } = actions;
const Containter = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const KeywordContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
`;

const purple = defaultTheme.accent.purple;
const orange = defaultTheme.accent.orange;
const mint = defaultTheme.accent.mint;
const blue = defaultTheme.accent.blue;
const colors = [purple, orange, mint, blue];
const randomColor = colors[Math.random(0, 3)];

const Keyword = styled.li`
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border-radius: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${props => (props.selected ? randomColor : "#fff")};
  color: ${props => (props.selected ? "#fff" : randomColor)};
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  border: 1px solid ${randomColor};
  transition: ${defaultTheme.animations.hover};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

class Keywords extends Component {
  constructor() {
    super();
    this.state = {
      interests: []
    };
    this.toggleInterests = this.toggleInterests.bind(this);
    this.saveSelectedInterests = this.saveSelectedInterests.bind(this);
  }

  toggleInterests(keywordId) {
    const { interests } = this.state;
    const index = interests.indexOf(keywordId);
    if (index === -1) {
      interests.push(keywordId);
    } else {
      interests.splice(index, 1);
    }
    this.setState({ interests });
  }

  async saveSelectedInterests() {
    const { interests } = this.state;
    const { creatorId, saveCreatorInterests, history } = this.props;
    await saveCreatorInterests(creatorId, interests);
    history.push("/onboarding/links");
  }

  render() {
    const { interests } = this.state;
    const { keywords } = this.props;

    return (
      <Containter>
        <h2>Select Interests</h2>
        <KeywordContainer>
          {keywords.map((keyword, idx) => (
            <Keyword
              key={keyword.id}
              selected={interests.includes(keyword.id)}
              onClick={() => this.toggleInterests(keyword.id)}
            >
              <h5>{keyword.name}</h5>
            </Keyword>
          ))}
        </KeywordContainer>
        <button onClick={() => this.saveSelectedInterests()}>Next</button>
      </Containter>
    );
  }
}

const mapStateToProps = ({ auth, keywords }) => ({
  creatorId: auth.id,
  keywords
});

const mapDispatchToProps = {
  saveCreatorInterests
};

export default connect(mapStateToProps, mapDispatchToProps)(Keywords);
