import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const KeywordContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Keyword = styled.li`
  width: 194px;
  height: 64px;
  background: ${props => (props.selected ? "#f2f2f2" : "#ff5c28")};
  color: ${props => (props.selected ? "#ff5c28" : "#f2f2f2")};
  border: 1px solid #ff5c28;
`;

class Keywords extends Component {
  constructor() {
    super();
    this.state = {
      interests: []
    };
  }

  render() {
    const { keywords } = this.props;

    return (
      <div>
        Select Interests
        <KeywordContainer>
          {keywords.map(keyword => (
            <Keyword key={keyword.id} selected>
              {keyword.name}
            </Keyword>
          ))}
        </KeywordContainer>
        <button>Next</button>
      </div>
    );
  }
}

const mapStateToProps = ({ keywords }) => ({ keywords });

export default connect(mapStateToProps)(Keywords);
