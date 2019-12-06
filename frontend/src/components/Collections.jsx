// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";
import CollectionRow from "../CollectionRow";

class Collections extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteCollection = this.handleDeleteCollection.bind(this);
  }

  handleDeleteCollection(ev) {}

  render() {
    const { collections, creators } = this.props;
    return (
      <div>
        Collections page
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Description</th>
              <th>Location</th>
            </tr>
            {collections.map(collection => {
              // const creator= creators.find(
              //   creator.id === collection.creatorId
              // );
              return <CollectionRow key= {collection.id} collectionId={collection.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ collections, creators }) => {
  // need to filter the collection list
  // after setting the url path for collection or business account user
  // 1. filter collections upper level and pass the filtered collection & businessId to collection class
  // 2. location.pathname ---> cath businessId
  // const filteredCollections = collections.filter(collection.businessId === businessId)

  return {
    collections,
    creators
  };
};

export default connect(mapStateToProps)(Collections);
