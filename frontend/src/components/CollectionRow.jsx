import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
const { handleDeleteCollection, toggleSelected } = actions;

class CollectionRow extends Component {
  render() {
    const {
      creator,
      selected,
      handleDeleteCollection,
      toggleSelected
    } = this.props;

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            key={creator.id}
            checked={selected.includes(creator.id)}
            onChange={() => toggleSelected(creator.id)}
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
  handleDeleteCollection,
  toggleSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
