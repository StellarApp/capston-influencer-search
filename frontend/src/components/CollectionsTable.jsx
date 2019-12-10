import React, { Component } from "react";

import CollectionRow from "./CollectionRow";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 4rem;
`;

const CollectionTable = ({ collections }) => {
  return (
    <Container>
      {collections.map(collection => {
        return <CollectionRow key={collection.id} collection={collection} />;
      })}
    </Container>
  );
};

export default CollectionTable;
