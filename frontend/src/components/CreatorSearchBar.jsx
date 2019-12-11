// Package imports
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
    const { searchText, locations, keywords } = this.props;
    const { handleFilterChange } = this;

    return (
      <Container>
        <TextField
          label="Search by Keywords"
          variant="outlined"
          type="search"
          placeholder="Search by keywords"
          name="searchText"
          value={searchText}
          onChange={handleFilterChange}
        />
        <FormControl>
          <InputLabel>Location</InputLabel>
          <Select name="searchLocation" onChange={handleFilterChange}>
            <MenuItem value="">Select All</MenuItem>
            {locations.map((location, idx) => (
              <MenuItem key={idx} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select name="searchGender" onChange={handleFilterChange}>
            <MenuItem value="">Select All</MenuItem>
            <MenuItem value="female">female</MenuItem>
            <MenuItem value="male">male</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Interest</InputLabel>
          <Select name="searchInterest" onChange={handleFilterChange}>
            <MenuItem value="">Select All</MenuItem>
            {keywords.map((interest, idx) => (
              <MenuItem key={idx} value={interest.id}>
                {interest.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    );
  }
}

export default CreatorSearchBar;
