import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
const { handleDeleteCollection, handleAddContact } = actions;

class CollectionRow extends Component {
  render() {
    const {
      creator,
      selected,
      handleDeleteCollection
      // handleAddContact
    } = this.props;

    console.log("selected", selected);
    console.log("selected", selected.includes(creator.id));
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            key={creator.id}
            checked={selected.includes(creator.id)}
            onChange={() => {}}
            // onChange={() => handleAddContact({name: creator.fullName, email:creator.email})}
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

const mapStateToProps = ({ creators, selected }, { collection }) => ({
  creator: creators.find(creator => creator.id === collection.creatorId),
  selected
});

const mapDispatchToProps = {
  handleDeleteCollection
  // handleAddContact
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
