import React, { Component } from "react";
import { connect } from "react-redux";

class ContactCreators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendFrom: "",
      sendTo: "",
      emailSubject: "",
      emailBody: "",
      error: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    alert("Your message has been sent.");
    this.props.history.push("/collections");
  }

  onChange(ev) {
    console.log("target--->", ev.target);
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    const { sendFrom, sendTo } = this.props;
    const { onChange } = this;
    return (
      <div>
        Send Email to Creators
        <form>
          <div>
            <label>Send From: </label>
            <input
              type="text"
              name="sendFrom"
              value={sendFrom}
              onChange={onChange}
              required
            ></input>
          </div>
          <div>
            <label>Send To: </label>
            <input
              type="text"
              name="sendTo"
              value={sendTo}
              onChange={onChange}
              required
            ></input>
          </div>
          <div>
            <label>Subject: </label>
            <input
              type="text"
              name="emailSubject"
              onChange={onChange}
              required
            ></input>
          </div>
          <div>
            <label>Email Body: </label>
            <input
              type="text"
              name="emailBody"
              onChange={onChange}
              required
            ></input>
          </div>
          <button onSubmit={() => onSubmit()}></button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts, auth }, { history }) => {
  const sendTo = contacts.reduce((accum, ele) =>
    (accum.push(`${ele.name} <${ele.email}>`), []).join("; ")
  );

  const sendFrom = `${auth.fullName} <${auth.email}>`;

  return {
    contacts,
    sendFrom,
    sendTo,
    history
  };
};

export default connect(mapStateToProps)(ContactCreators);
