import React from "react";
import { connect } from "react-redux";
import { actions } from "../store";

const CollectionRow = ({ collectionId, handleDeleteCollection }) => {
  const creator = creators.find(creator.id === collectionId);

  return (
    <tr>
      <td>creator.fullName</td>
      <td>creator.creatorInsights.biography</td>
      <td>creator.location</td>
      <button onClick={() => handleDeleteCollection(collectionId)}> Delete</button>
    </tr>
  );
};

const mapStateToProps = ({ creators }) => ({ creators });

const mapDispatchToProps = dispatch => ({
  handleDeleteCollection: collectionId =>
    actions.handleDeleteCollection(collectionId)
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
