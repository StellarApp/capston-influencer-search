// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local imports
import { actions } from "../store";
import CreatorSearchBar from "./CreatorSearchBar";
import CreatorList from "./CreatorList"
import authReducer from "../store/reducers/auth";

class Creators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchLocation: "",
      searchGender: ""
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { creators, locations } = this.props;
    const { searchText, searchLocation, searchGender } = this.state;
    const { handleFilterChange } = this;
    return (
      <div>
        <CreatorSearchBar
          searchText={searchText}
          searchLocation={searchLocation}
          searchGender={searchGender}
          locations={locations}
          onFilterChange={handleFilterChange}
        />
        <CreatorList
          creators={creators}
          searchText={searchText}
          searchLocation={searchLocation}
          searchGender={searchGender}
          locations={locations}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ creators, auth }) => {
  const locations =
    creators &&
    creators.reduce((accum, ele) => {
      if (!accum.includes(ele.location)) {
        accum.push(ele.location);
      }
      return accum;
    }, []);

  return {
    creators,
    locations
  };
};

export default connect(mapStateToProps)(Creators);
