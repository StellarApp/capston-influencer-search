import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

import Button from "./buttons/PrimaryButton";

class EditLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: this.props.links.twitter,
      website: this.props.links.website,
      youtube: this.props.links.youtube
    };
    this.onSumit = this.onSumit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSumit(ev) {
    ev.preventDefault();
    const { creatorId } = this.props;
    const inputList = { ...this.state };
    // pass the changes to database
    this.setState({ sentStatus: true });
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    const { twitter, website, youtube } = this.state;
    const { onChange, onSumit } = this;
    return (
      <Container>
        <form onSubmit={onSumit}>
          <div>
            <label>Twitter: </label>
            <input
              type="email"
              name="twitter"
              value={twitter}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Website: </label>
            <input
              type="text"
              name="website"
              value={website}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Youtube:</label>
            <input
              type="text"
              name="youtube"
              value={youtube}
              onChange={onChange}
            />
          </div>
          <Button type="submit" value="Submit">
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default connect(null)(EditLinkForm);
