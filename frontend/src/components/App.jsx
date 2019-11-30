// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// Local imports
import { actions } from "../store";

// Components
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Logout from "./Logout";
import Account from "./Account";
import Collections from "./Collections";
import Creators from "./Creators";

class App extends Component {
  componentDidMount() {
    const {
      attemptSessionLogin,
    } = this.props;

    // getLoginStatus();
  }

  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} />
          <Route path="/collections" component={Collections} />
          <Route path="/creators" component={Creators} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getLoginStatus: () => dispatch(actions.getLoginStatus())
});

export default connect(null, mapDispatchToProps)(App);
