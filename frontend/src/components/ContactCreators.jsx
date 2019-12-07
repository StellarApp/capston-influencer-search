import React, { Component } from "react";
import { connect } from "react-redux";

class ContactCreators extends Component {
  constructor() {
    super();
    this.handleSendemail = this.handleSendemail.bind(this);
  }

  handleSendemail() {}

  render() {
    const { contacts, sendFrom, sendTo } = this.props;

    return (
      <div>
        Send Email to Creators
        <form>
          <div>
            <label>Send From: </label>
            <input type="text" value={sendFrom} required></input>
          </div>
          <div>
            <label>Send To: </label>
            <input type="text" value={sendTo}></input>
          </div>
          <div>
            <label>Subject: </label>
            <input type="text" ></input>
          </div>
          <div>
            <label>Email Body: </label>
            <input type="text" ></input>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts, auth }) => {
  const sendTo = contacts.reduce(
    (accum, ele) => (accum += `; ${ele.name} <${ele.email}>`),
    ""
  );

  const sendFrom = `${auth.fullName} <${auth.email}>`;
  return {
    contacts,
    sendFrom,
    sendTo
  };
};

export default connect(mapStateToProps)(ContactCreators);
