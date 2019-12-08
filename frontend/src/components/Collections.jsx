import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionsTable from "./CollectionsTable";
import { actions } from "../store";
const { fetchSelected } = actions;

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    // this.handleSendEmail = this.handleSendEmail.bind(this);
  }

  componentDidMount() {
    const { collections, fetchSelected } = this.props;
    fetchSelected(collections);
  }

  // handleSendEmail() {
  //   const { history, contacts } = this.props;
  //   if (contacts.length === 0) {
  //     this.setState({
  //       error: "Please select at least one creator to contact."
  //     });
  //     return;
  //   }
  //   history.push("/contact-creators");
  // }

  render() {
    const { collections, history } = this.props;
    const { error } = this.state;
    // const { handleSendEmail } = this;

    if (collections.length === 0) {
      history.push("/creators");
      alert("Collection is empty. Please add a creator.");
      return null;
    } else {
      return (
        <div>
          <div>{error && <p>{error}</p>}</div>
          <CollectionsTable collections={collections} />
          <input
            type="submit"
            value="Contact to creator(s)"
            // onClick={() => handleSendEmail(contacts)}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ collections, auth }) => {
  const businessId = auth.id;
  const filteredCollections = collections.filter(
    collection => collection.businessId === businessId
  );

  return {
    collections: filteredCollections,
    collections
  };
};

const mapDispatchToProps = {
  fetchSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
