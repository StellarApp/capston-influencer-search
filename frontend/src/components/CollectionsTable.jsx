// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";
import CollectionRow from "./CollectionRow";

const CollectionTable = ({ collections }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Full Name</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
        {collections.map(collection => {
          return (
              <CollectionRow key={collection.id} collectionId={collection.id} />
          );
        })}
      </tbody>
    </table>
  );
};

export default CollectionTable;
