import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import defaultTheme from "../Theme";
import { actions } from "../../store";
import IconInput from "./Input";
import Button from "./Button";
import { social_twitter, social_youtube, social_web } from "../Icon";
const Containter = styled.div`
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

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const { saveCreatorLinks } = actions;
const Links = ({ creatorId, saveCreatorLinks, history }) => {
  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;

    const sanitizeValue = value => (value !== "" ? value : null);
    const links = {
      youtube: sanitizeValue(form.youtube.value),
      twitter: sanitizeValue(form.twitter.value),
      website: sanitizeValue(form.website.value)
    };

    await saveCreatorLinks(creatorId, links);
    history.push("/account");
  };

  return (
    <Containter>
      <Header>Add other social media links</Header>
      <Form onSubmit={onSubmit}>
        <IconInput
          svg={social_youtube}
          name="youtube"
          placeholder="http://youtube.com/channel/<channel>"
        />
        <IconInput
          svg={social_twitter}
          name="twitter"
          placeholder="http://twitter.com/<username>"
        />
        <IconInput
          svg={social_web}
          name="website"
          placeholder="www.example.com"
        />
        <Button>Continue</Button>
      </Form>
    </Containter>
  );
};

const mapStateToProps = ({ auth }) => ({
  creatorId: auth.id
});

const mapDispatchToProps = { saveCreatorLinks };

export default connect(mapStateToProps, mapDispatchToProps)(Links);
