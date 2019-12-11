import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import defaultTheme from "./Theme";

const Container = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h3`
  color: ${defaultTheme.accent.orange};
  margin-bottom: 3rem;
`;

const Response = styled.p`
  font-weight: bold;
`;

const Label = styled.label`
  padding-left: 1rem;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  grid-area: 1/1/2/3;
  border-radius: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  display: block;
  min-width: 370px;
  vertical-align: center;
  background-color: #ffffff;
  color: ${defaultTheme.textColor.primary};
  border: 1px solid ${defaultTheme.accent.orange};
  font-family: "work sans";
  font-weight: 400;
  font-size: 16px;
  transition: ${defaultTheme.animations.hover};
  &:focus {
    background-color: ${defaultTheme.bg.secondary};
  }
`;

const StyledInputBody = styled.textarea`
  grid-area: 1/1/2/3;
  border-radius: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  display: block;
  min-width: 370px;
  vertical-align: center;
  background-color: #ffffff;
  color: ${defaultTheme.textColor.primary};
  border: 1px solid ${defaultTheme.accent.orange};
  font-family: "work sans";
  font-weight: 400;
  font-size: 16px;
  transition: ${defaultTheme.animations.hover};
  &:focus {
    background-color: ${defaultTheme.bg.secondary};
  }
`;

const ButtonContainer = styled.div`
  grid-area: 1/1/2/3;
  margin: 1rem 0;
  display: block;
  display: flex;
  justify-content: space-around;
  min-width: 350px;
`;

const Button = styled.button`
  border-radius: 2rem;
  padding: 1rem;
  display: block;
  vertical-align: center;
  width: 45%;
  color: #ffffff;
  font-family: ${defaultTheme.fonts.heading};
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  background-color: ${defaultTheme.accent.orange};
  transition: ${defaultTheme.animations.hover};
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

class ContactCreators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from,
      to: this.props.to,
      cc: "",
      subject: "",
      body: "",
      sentStatus: false
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  sendEmail(ev) {
    ev.preventDefault();

    const inputList = { ...this.state };
    const { history } = this.props;
    delete inputList.cc;
    delete inputList.sentStatus;

    this.setState({ sentStatus: true, error: [] });

    setTimeout(() => history.push("/collections"), 3000);
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    const { from, to, history } = this.props;
    const { error, sentStatus } = this.state;
    const { onChange, sendEmail } = this;
    return (
      <Container>
        <Header>Send Email to Creators</Header>
        {sentStatus ? (
          <Response>Email has sent to the creator(s).</Response>
        ) : (
          ""
        )}
        <Form onSubmit={sendEmail}>
          <div>
            <Label>Send From: </Label>
            <StyledInput
              type="text"
              name="from"
              value={from}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <Label>Send To: </Label>
            <StyledInput
              type="text"
              name="to"
              value={to}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <Label>CC:</Label>
            <StyledInput
              type="text"
              name="cc"
              onChange={onChange}
              placeholder="Enter cc"
            />
          </div>
          <div>
            <Label>Subject</Label>
            <StyledInput
              type="text"
              name="subject"
              onChange={onChange}
              placeholder="Enter Email Subject"
              required
            />
          </div>
          <div>
            <Label>Body</Label>
            <StyledInputBody
              type="text"
              name="body"
              onChange={onChange}
              placeholder="Enter Email Body"
              rows="7"
              required
            />
          </div>
          <ButtonContainer>
            <Button type="submit" value="Submit">
              Send Email
            </Button>
            <Button
              type="button"
              value="Cancel"
              onClick={() => history.push("/collections")}
            >
              Go Back
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ creators, selected, auth }, { history }) => {
  const to =
    selected.length > 0
      ? selected
          .map(contact => creators.find(creator => creator.id === contact))
          .reduce(
            (accum, ele) => (accum += `; ${ele.fullName} <${ele.email}>`),
            ""
          )
          .slice(1)
      : "";

  const from = `${auth.fullName} <${auth.email}>`;

  return {
    from,
    to,
    history
  };
};

export default connect(mapStateToProps)(ContactCreators);
