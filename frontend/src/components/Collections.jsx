// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import CollectionsTable from "./CollectionsTable";

class Collections extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { collections, creators } = this.props;
      if(collections.length === 0){
        return null
      } else {
        return <CollectionsTable />
      }
  }
}

const mapStateToProps = ({ collections, creators, auth }) => {
  const businessId = auth.id;
  const filteredCollections = collections.filter(collection => collection.businessId === businessId)

  return {
    collections: filteredCollections,
    creators
  };
};

export default connect(mapStateToProps)(Collections);
