// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";

// Local imports
import { actions } from "../store";
const {
  fetchCreators,
  fetchCollections,
  getBusinessLogin,
  fetchKeywords
} = actions;

// Components
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Logout from "./Logout";
import Account from "./Account";
import Collections from "./Collections";
import Creators from "./Creators";
import Creator from "./Creator";
import Keywords from "./onboarding/Keywords";
import Links from "./onboarding/Links";
import contactCreators from "./ContactCreators";

class App extends Component {
  componentDidMount() {
    this.props.fetchCreators();
    this.props.fetchKeywords();

    const values = queryString.parse(window.location.search);
    const businessId = values.business_id;
    const token = values.token;

    if (businessId) {
      this.props.fetchCollections(businessId);
      this.props.getBusinessLogin(businessId, token);
    }
  }

  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/onboarding/keywords" component={Keywords} />
          <Route path="/onboarding/links" component={Links} />
          <Route path="/account" component={Account} />
          <Route path="/collections" component={Collections} />
          <Route path="/creators/:id" component={Creator} />
          <Route path="/creators" component={Creators} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/contact-creators" component={contactCreators}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchCollections,
  fetchCreators,
  getBusinessLogin,
  fetchKeywords
};

export default connect(null, mapDispatchToProps)(App);
