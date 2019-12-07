import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
const { handleDeleteCollection, handleAddContact } = actions;

class CollectionRow extends Component {
  render() {
    const {
      creators,
      collection,
      handleDeleteCollection,
      handleAddContact
    } = this.props;

    const creator = creators.find(
      creator => creator.id === collection.creatorId
    );

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            key={creator.id}
            onChange={() => handleAddContact({name: creator.fullName, email:creator.email})}
          />
        </td>
        <td>{creator.fullName}</td>
        <td>{creator.creatorInsights[0].biography}</td>
        <td>{creator.location}</td>
        <td>
          <button onClick={() => handleDeleteCollection(collection.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = ({ creators }) => ({ creators });

const mapDispatchToProps = {
  handleDeleteCollection,
  handleAddContact
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
