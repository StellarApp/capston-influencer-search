// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Local imports
import { actions } from "../store";
import CreatorCard from "./CreatorCard";

const CreatorList = styled.div`
  grid-area: 2 / 1 / 4 / 4;
`;

class Creators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: "",
      state: "",
      gender: "",
      creators: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ creators: this.props.creators });
  }

  onChange(ev) {
    console.log(ev.target.name, ev.target.value);

    const { value } = ev.target;
    this.setState({
      [ev.target.name]: value
    });
  }

  onSubmit() {
    ev.preventDefault();

    const { searchWords, state, gender } = this.state;

    const creators =
      state.length === 0
        ? this.creators.filter(
            creator => creator.location.split(", ")[1] === state
          )
        : this.creators;

    if (gender.length === 0) {
      const filterByGender = creators.filter(
        creator => creator.gender === gender
      );
      creators = filterByGender;
    }

    if (searchWords.length !== 0) {
      const search = searchWords.toLowerCase();
      const searchObj = ["first_name", "last_name", "description", "interest"];
      // need to check what to filter by the search key word
    }

    this.setState({ searchWords: "", state: "", gender: "", creators });
  }

  render() {
    const { creators } = this.props;
    const { onChange, onSubmit } = this;

    console.log('props', this.props)
    return (
      <div>
        <form>
          <input
            type="search"
            name="searchWords"
            placeholder="Search by keywords"
            onChange={onChange}
          ></input>
          <select name="state">
            {creators.map(creator => {
              const state = creator.location.name.split(", ")[1];
              return <option value={state}>{state}</option>;
            })}
          </select>
          <select name="gender">
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
          <button type="submit" onSubmit={onSubmit}>
            Update
          </button>
        </form>
        <CreatorList>
          {this.state.creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </CreatorList>
      </div>
    );
  }
}

const mapStateToProps = ({ creators }) => ({ creators });

export default connect(mapStateToProps)(Creators);
