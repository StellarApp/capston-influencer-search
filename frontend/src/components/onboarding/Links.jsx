import React from "react";
import { connect } from "react-redux";

import { actions } from "../../store";
const { saveCreatorLinks } = actions;

const Links = ({ creatorId, saveCreatorLinks, history }) => {
  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;

    const sanitizeValue = value => (value !== '' ? value : null);
    const links = {
      youtube: sanitizeValue(form.youtube.value),
      twitter: sanitizeValue(form.twitter.value),
      website: sanitizeValue(form.website.value)
    };

    await saveCreatorLinks(creatorId, links);
    history.push("/account");
  };

  return (
    <form onSubmit={onSubmit}>
      Add Other Social Media Links
      <input
        name="youtube"
        placeholder="http://youtube.com/channel/<channel>"
      />
      <input name="twitter" placeholder="http://twitter.com/<username>" />
      <input name="website" placeholder="<your website link>" />
      <button>Next</button>
    </form>
  );
};

const mapStateToProps = ({ auth }) => ({
  creatorId: auth.id
});

const mapDispatchToProps = { saveCreatorLinks };

export default connect(mapStateToProps, mapDispatchToProps)(Links);
