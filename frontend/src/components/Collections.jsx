// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import CollectionsTable from "./CollectionsTable";

class Collections extends Component {
  constructor(props) {
    super(props);

    this.handleSendEmail = this.handleSendEmail.bind(this);
  }

  handleSendEmail() {
    console.log("props", this.props.history);
    const { history } = this.props;
    history.push("/contact-creators");
  }

  render() {
    console.log("history--->", this.props.history);
    const { collections, creators, contacts } = this.props;
    const { handleSendEmail } = this;
    if (collections.length === 0) {
      return null;
    } else {
      return (
        <div>
          <CollectionsTable collections={collections} />
          <button onClick={() => handleSendEmail(contacts)}>
            {" "}
            Contact To Creators
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (
  { collections, creators, auth, contacts },
  { history }
) => {
  const businessId = auth.id;
  const filteredCollections = collections.filter(
    collection => collection.businessId === businessId
  );

  return {
    collections: filteredCollections,
    creators,
    contacts,
    history
  };
};

export default connect(mapStateToProps)(Collections);
