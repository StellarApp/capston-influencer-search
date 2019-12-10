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
        <Form onSubmit={onSumit}>
          <div>
            <Label>Twitter: </Label>
            <StyledInput
              type="email"
              name="twitter"
              value={twitter}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <Label>Website: </Label>
            <StyledInput
              type="text"
              name="website"
              value={website}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <Label>Youtube:</Label>
            <StyledInput
              type="text"
              name="youtube"
              value={youtube}
              onChange={onChange}
            />
          </div>
          <button type="submit" value="Submit">
            Save
          </button>
        </Form>
      </Container>
    );
  }
}

export default connect(null)(EditLinkForm);
