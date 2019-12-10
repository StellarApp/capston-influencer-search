import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div>
        <h4>Send Email to Creators</h4>
        {sentStatus ? (
          <div>
            Email has sent. WEb page redirects to the collections after 3
            seconds.
          </div>
        ) : (
          ""
        )}
        <form onSubmit={sendEmail}>
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
            <input type="text" name="subject" onChange={onChange} required />
          </div>
          <div>
            <label>Email Body: </label>
            <input type="text" name="body" onChange={onChange} required />
          </div>
          <button type="submit" value="Submit">
            Send Email
          </button>
          <button
            type="button"
            value="Cancel"
            onClick={() => history.push("/collections")}
          >
            Go Back
          </button>
        </form>
      </div>
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
