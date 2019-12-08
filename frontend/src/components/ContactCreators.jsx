import React, { Component } from "react";
import { connect } from "react-redux";

class ContactCreators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from,
      to: this.props.to,
      cc: "",
      emailSubject: "",
      emailBody: "",
      error: []
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  sendEmail() {
    const inputList = { ...this.state };
    delete inputList.cc;
    const keys = Object.keys(inputList);
    const error = keys.reduce((accum, ele) => {
      return inputList[ele].length > 0
        ? accum
        : (accum += `${ele} field is required.`);
    }, []);

    if (error.length > 0) {
      this.setState({ error });
      return;
    }

    const { history } = this.props;
    history.push("/collections");
    alert("Your message has been sent.");
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    const { from, to, error } = this.props;
    const { onChange, sendEmail } = this;
    return (
      <div>
        Send Email to Creators
        <div>{error && error.map((err, idx) => <p key={idx}>{err}</p>)}</div>
        <form>
          <div>
            <label>Send From: </label>
            <input
              type="text"
              name="from"
              value={from}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Send To: </label>
            <input
              type="text"
              name="to"
              value={to}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>CC: </label>
            <input type="text" name="cc" onChange={onChange} />
          </div>
          <div>
            <label>Subject: </label>
            <input
              type="text"
              name="emailSubject"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Email Body: </label>
            <input type="text" name="emailBody" onChange={onChange} required />
          </div>
          <input
            type="submit"
            value="Send Email"
            onClick={() => sendEmail()}
          ></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts, auth }, { history }) => {
  const to =
    contacts.length > 0
      ? contacts
          .reduce((accum, ele) => (accum += `; ${ele.name} <${ele.email}>`), "")
          .slice(1)
      : "test <s@gmail.com>; there <there@gmail.com>";

  const from = `${auth.fullName} <${auth.email}>`;

  return {
    contacts,
    from,
    to,
    history
  };
};

export default connect(mapStateToProps)(ContactCreators);
