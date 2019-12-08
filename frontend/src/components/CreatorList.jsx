import React, { Component } from "react";
import CreatorCard from "./CreatorCard";

class CreatorList extends Component {
  render() {
    const {
      searchText,
      searchLocation,
      searchGender,
      creators,
      businessId
    } = this.props;

    const filteredCreators = [];
    
    creators.forEach(creator => {
      const keys = ["firstName", "lastName", "description"]; //add interest
      const searchTarget = keys
        .reduce((accum, ele) => (accum += ` ${creator[ele]}`), "")
        .toLowerCase();

      if (searchTarget.indexOf(searchText.toLowerCase()) === -1) {
        return;
      }

      if (creator.location !== searchLocation && searchLocation !== "") {
        return;
      }

      if (creator.gender !== searchGender && searchGender !== "") {
        return;
      }

      filteredCreators.push(<CreatorCard key={creator.id} creator={creator} />);
    });

    return <div>{filteredCreators}</div>;
  }
}

export default CreatorList;
