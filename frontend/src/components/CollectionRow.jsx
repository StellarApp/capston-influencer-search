import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
const { handleDeleteCollection } = actions;
// const CollectionRow = ({ collectionId, handleDeleteCollection }) => {
//   const creator = creators.find(creator.id === collectionId);

//   return (
//     <tr>
//       <td><input type="checkbox" key={creator.id} sendTo={creator.email} /></td>
//       <td>creator.fullName</td>
//       <td>creator.creatorInsights[0].biography</td>
//       <td>creator.location</td>
//       <button onClick={() => handleDeleteCollection(collectionId)}> Delete</button>
//     </tr>
//   );
// };

class CollectionRow extends Component {
  constructor() {
    super();
    this.state = {
      contactList: []
    };
  }

  addToContactList(ev) {
    const { fullName, email } = ev.target;
    const contactList = this.state.contactList.push({
      fullName,
      email
    });

    this.setState({ contactList });
  }

  render() {
    const { creators, collection, handleDeleteCollection } = this.props;
    const creator = creators.find(
      creator => creator.id === collection.creatorId
    );

    return (
      <tr>
        <td>
          <input
            type="checkbox"
            key={creator.id}
            id={creator.email}
            name={creator.fullName}
            onChange={addToContactList}
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
  handleDeleteCollection
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionRow);
