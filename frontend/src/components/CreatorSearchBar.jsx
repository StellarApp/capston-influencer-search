// Package imports
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import styled from "styled-components";
import defaultTheme from "./Theme";
import { makeStyles } from "@material-ui/core/styles";

const Container = styled.form`
  display: flex;
  padding: 3rem;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  height: 6rem;
  overflow-y: hidden;
  align-items: center;
`;

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
    const {
      searchText,
      locations,
      searchLocation,
      searchGender,
      searchInterest,
      keywords
    } = this.props;
    const { handleFilterChange } = this;

    return (
      <Container>
        <TextField
          id="outlined-basic"
          label="Search by Keywords"
          variant="outlined"
          type="search"
          placeholder="Search by keywords"
          name="searchText"
          value={searchText}
          onChange={handleFilterChange}
        />
        <Select name="searchLocation" onChange={handleFilterChange}>
          <option value="">Select All</option>
          {locations.map((location, idx) => (
            <option key={idx} value={location}>
              {location}
            </option>
          ))}
        </Select>
        <Select name="searchGender" onChange={handleFilterChange}>
          <option value="">Select All</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </Select>
        <Select name="searchInterest" onChange={handleFilterChange}>
          <option value="">Select All</option>
          {keywords.map((interest, idx) => (
            <option key={idx} value={interest.id}>
              {interest.name}
            </option>
          ))}
        </Select>
      </Container>
    );
  }
}

export default CreatorSearchBar;
