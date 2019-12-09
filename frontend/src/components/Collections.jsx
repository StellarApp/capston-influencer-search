import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionStats from "./CollectionStats";
import CollectionsTable from "./CollectionsTable";
import { actions } from "../store";
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
    const { collections, history } = this.props;
    const { error } = this.state;
    const { handleSendEmail } = this;

    return (
      <div>
        {collections.length > 0 ? (
          <div>
            <div>{error && <p>{error}</p>}</div>
            <CollectionsTable collections={collections} />
            <input
              type="submit"
              value="Contact to creator(s)"
              onClick={() => handleSendEmail()}
            />
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
