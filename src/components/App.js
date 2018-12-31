/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./containers/HomePage";
import SurveyPage from "./containers/SurveyPage";
import SummaryPage from "./containers/SummaryPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/survey/:id" component={SurveyPage} />
          <Route exact path="/summary" component={SummaryPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
