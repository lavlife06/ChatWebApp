/* eslint-disable no-unused-vars */
import React, { useState, Fragment, useEffect } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./reduxstuff/utils/setAuthToken";
import store from "./reduxstuff/store";
import { loadUser } from "./reduxstuff/actions/auth";
import Navbar from "./components/Layout/Navbar";
import Main from "./components/Main";
import "./App.css";
import Check from "./components/Layout/Check";
import TheAlertCompo from "./components/Layout/Alert";

const App = () => {
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //     store.dispatch(loadUser());
  //   }
  // }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Login} />
        <TheAlertCompo />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/main" component={Main} />
          {/* <Route exact path="/profile/:id" component={Profile} /> */}
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
