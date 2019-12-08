import React, { Component } from "react";

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
          return <CollectionRow key={collection.id} collection={collection} />;
        })}
      </tbody>
    </table>
  );
};

export default CollectionTable;
