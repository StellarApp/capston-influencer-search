// Package imports
import React, { Component } from "react";

class CreatorSearchBar extends Component {
    constructor(props) {
      super(props);
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }
  
    handleFilterChange(ev) {
      const { name, value } = ev.target;
      this.props.onFilterChange(name, value);
    }
  
    render() {
      const { searchText, locations, searchLocation, searchGender } = this.props;
      const { handleFilterChange } = this;
  
      return (
        <form>
          <input
            type="search"
            placeholder="Search by keywords"
            name="searchText"
            value={searchText}
            onChange={handleFilterChange}
          />
          <select name="searchLocation" onChange={handleFilterChange}>
            <option value="">Select All</option>
            {locations.map((location, idx) => (
              <option key={idx} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select name="searchGender" onChange={handleFilterChange}>
            <option value="">Select All</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
          {/* // Add interest as drop-box */}
          {/* // Add followers Range */}
        </form>
      );
    }
  }

  export default CreatorSearchBar