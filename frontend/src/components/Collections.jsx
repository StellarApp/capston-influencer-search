import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionStats from "./CollectionStats";
import CollectionsTable from "./CollectionsTable";
import { actions } from "../store";
import styled from "styled-components";
import Button from "./buttons/PrimaryButton";
const Bar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #c4c4c4;
  align-items: center;
  justify-content: space-between;
`;
const Count = styled.h4`
  margin: 2rem;
`;
const ContactBtn = styled(Button)`
  margin: 2rem;
`;
const { fetchSelected } = actions;

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
  }

  componentDidMount() {
    const { collections, fetchSelected } = this.props;
    fetchSelected(collections);
  }

  componentDidUpdate(){
    const { collections, fetchSelected } = this.props;
    fetchSelected(collections);
  }

  handleSendEmail() {
    const { history, selected } = this.props;
    if (selected.length === 0) {
      this.setState({
        error: "Please select at least one creator to contact."
      });
      return;
    }
    history.push("/contact-creators");
  }

  render() {
    const { collections, history, selected } = this.props;
    const { error } = this.state;
    const { handleSendEmail } = this;

    return (
      <div>
        {collections.length > 0 ? (
          <div>
            <div>{error && <p>{error}</p>}</div>
            <CollectionStats />
            <CollectionsTable collections={collections} />
            <Bar>
              <Count>
                {selected.length ? `${selected.length} selected ` : ""}
              </Count>
              <ContactBtn
                type="submit"
                value="Contact to creator(s)"
                onClick={() => handleSendEmail()}
              >
                Contact Creators
              </ContactBtn>
            </Bar>
          </div>
        ) : (
          <h3>Collection is empty. Please add a creator.</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ collections, auth, selected }) => {
  const businessId = auth.id;
  const filteredCollections = collections.filter(
    collection => collection.businessId === businessId
  );

  return {
    collections: filteredCollections,
    selected
  };
};

const mapDispatchToProps = {
  fetchSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
